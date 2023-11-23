from django.shortcuts import render
from .models import *
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect #
from .models import Movimiento    #
from .forms import GastoForm #
import random
from django.http import JsonResponse
from .models import Objetivo

wrongtype = "Tipo de petición no soportado para la operación"

@csrf_exempt
def visualizar_objetivos(request):
    if request.method == 'POST':
        # Obtener los objetivos del usuario 
        data = json.loads(request.body)
        usuario_id = data["usuario_id"]
        objetivos = Objetivo.objects.filter(usuario_id=usuario_id)

        # Convertir objetivos a formato JSON
        objetivos_data = [{'nombre': objetivo.nombre, 'cantidad_deseada': objetivo.cantidad_deseada,
                           'cantidad_alcanzada': objetivo.cantidad_alcanzada, 'fecha_inicio': str(objetivo.fecha_inicio),
                           'fecha_fin': str(objetivo.fecha_fin)} for objetivo in objetivos]

        # Retorna los objetivos como respuesta JSON
        return JsonResponse({'objetivos': objetivos_data})
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)
    

@csrf_exempt
def crear_gasto(request):
    if request.method == 'POST':
        form = GastoForm(request.POST)
        if form.is_valid():
            gasto = form.save(commit=False)
            gasto.usuario = request.user
            gasto.save()
            return redirect('visualizar_gastos')
    else:
        form = GastoForm()
    return render(request, 'crear_gasto.html', {'form': form})
@csrf_exempt

def visualizar_gastos(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            usuario_id = data['usuario_id']

            # Validar que el usuario_id está presente en los datos
            if usuario_id is None:
                return JsonResponse({'error': 'Se requiere el campo usuario_id en los datos'}, status=400)

            # Obtener los gastos del usuario 
            gastos = Movimiento.objects.filter(usuario_id=usuario_id)

            # Convertir gastos a formato JSON
            gastos_data = [{'cantidad': gasto.cantidad, 'fecha': str(gasto.fecha)} for gasto in gastos]

            # Retorna los gastos como respuesta JSON
            return JsonResponse({'gastos': gastos_data})

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Los datos no son un objeto JSON válido'}, status=400)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)

@csrf_exempt
def EliminarMovimiento(request):
    if request.method == 'GET':
        # Obtiene todos los movimientos desde la base de datos
        movimientos = Movimiento.objects.all()

        # Convierte los movimientos a un formato JSON
        movimientos_data = [{'id': movimiento.id, 'descripcion': movimiento.descripcion, 'monto': movimiento.monto} for movimiento in movimientos]

        # Retorna los movimientos como respuesta JSON
        return JsonResponse({'movimientos': movimientos_data})

    elif request.method == 'POST':
        # Obtiene el ID del movimiento a eliminar desde los datos de la solicitud
        movimiento_id = request.POST.get('id')

        try:
            # Intenta obtener el movimiento por su ID
            movimiento = Movimiento.objects.get(id=movimiento_id)
            
            # Elimina el movimiento
            movimiento.delete()
            
            return JsonResponse({'mensaje': 'Movimiento eliminado exitosamente'})
        except Movimiento.DoesNotExist:
            # Si el movimiento no existe, devuelve un mensaje de error
            return JsonResponse({'error': 'El movimiento no existe'}, status=404)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)
    
@csrf_exempt
def obtenermovimientos(request):
    if request.method == "POST":
        lista = []
        data = json.loads(request.body)
        user = data["usuario"]
        MovimientosQuerySet = Movimiento.objects.filter(usuario = user)
        for m in MovimientosQuerySet:
            lista.append({
                "usuario" : m.usuario.nombre,
                "categoria" : "N/A",
                "cantidad" : m.cantidad,
                "fecha" : str(m.fecha),
                "id" : m.pk
            })
        dict = {"lista" : lista}
        return HttpResponse(json.dumps(dict))
    else:
        return HttpResponse(wrongtype)

from django.http import JsonResponse
from .models import Usuario

def obtener_usuarios(request):
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        usuarios_data = [{'id': usuario.id, 'nombre': usuario.nombre, 'email': usuario.email} for usuario in usuarios]
        return JsonResponse({'usuarios': usuarios_data})
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)
    
@csrf_exempt
def validarlogin(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data["email"]
        passw = data["password"]
        UsuariosQuerySet = Usuario.objects.all()
        resp = {"resp" : "no_user",
                "id" : "N/A"}
        for u in UsuariosQuerySet:
            if u.email == email:
                if u.password == passw:
                    resp["resp"] = "login_ok"
                    resp["id"] = u.pk
                    resp["user"] = u.email
                else:
                    resp["resp"] = "wrong_password"
                break
        return HttpResponse(json.dumps(resp))

    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def userregister(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data["nombre"]
        surname = data["apellido"]
        mail = data["email"]
        passw = data["password"]
        UsuariosQuerySet = Usuario.objects.all()
        for u in UsuariosQuerySet:
            if u.email == mail:
                resp = {"resp" : "email_taken"}
                return HttpResponse(json.dumps(resp))
        usuario = Usuario(nombre = name, apellido = surname, email = mail, password = passw)
        usuario.save()
        resp = {"resp" : "register_successful"}
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def modnombres(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data["id"]
        nombre = data["nombre"]
        Usuario.objects.filter(pk=id).update(nombre=nombre)
        resp = {
            "resp" : "name_updated"
        }
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def modapellidos(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data["id"]
        apellido = data["apellido"]
        Usuario.objects.filter(pk=id).update(apellido=apellido)
        resp = {
            "resp" : "surname_updated"
        }
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def modemail(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data["id"]
        email = data["email"]
        Usuario.objects.filter(pk=id).update(email=email)
        resp = {
            "resp" : "email_updated"
        }
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def modclave(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data["id"]
        clave = data["clave"]
        Usuario.objects.filter(pk=id).update(password=clave)
        resp = {
            "resp" : "clave_updated"
        }
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def eliminarcuenta(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        id = data["id"]
        Usuario.objects.filter(pk=id).delete()
        resp = {"resp" : "user_deleted"}
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt    
def crearmovimiento(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user = Usuario.objects.filter(pk=data["usuario"])[0]
        cant = data["cantidad"]
        date = data["fecha"]
        mov = Movimiento(usuario = user, cantidad = cant, fecha = date)
        mov.save()
        resp = {"resp" : "creation_ok"}
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def modmovimiento(request):
    if request.method == "POST":
        data = json.loads(request.body)
        id = data["id"]
        cant = data["cantidad"]
        date = data["fecha"]
        Movimiento.objects.filter(pk=id).update(cantidad = cant, fecha = date)
        resp = {"resp" : "update_ok"}
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def borrarmovimiento(request):
    if request.method == "POST":
        data = json.loads(request.body)
        id = data["id"]
        Movimiento.objects.filter(pk=id).delete()
        resp = {"resp" : "delete_ok"}
        return HttpResponse(json.dumps(resp))
    else:
        return HttpResponse(wrongtype)

@csrf_exempt
def perfil(request):
    if request.method == "POST":
        data = json.loads(request.body)
        id = data["id"]
        user = Usuario.objects.filter(pk=id).first()
        name = user.nombre
        surname = user.apellido
        email = user.email
        pw = user.password
        usuario = {
            "nombre" : name,
            "apellido" : surname,
            "email" : email,
            "password" : pw
        }
        return HttpResponse(json.dumps(usuario))
    else:
        return HttpResponse(wrongtype)
    
def obtener_usuarios(request):
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        usuarios_data = [{'id': usuario.id, 'nombre': usuario.nombre, 'email': usuario.email} for usuario in usuarios]
        return JsonResponse({'usuarios': usuarios_data})
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)

@csrf_exempt
def crearfamilia(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = Usuario.objects.get(pk=data["id"])
        name = data["name"]
        desc = data["desc"]
        fam = Familia(nombre = name, descripcion = desc)
        fam.save()
        famid = Familia.objects.get(pk=fam.pk)
        uxf = UsuarioXFamilia(usuario = user, familia = famid, admin = True)
        uxf.save()
        dictResponse = {"famid" : fam.pk}
        return HttpResponse(json.dumps(dictResponse))
    else:
        return HttpResponse(wrongtype)

@csrf_exempt
def unirfamilia(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = Usuario.objects.get(pk = data["user"])
        fam = Familia.objects.get(pk = data["familia"])
        uxf = UsuarioXFamilia(usuario = user, familia = fam)
        uxf.save()
        cadena = "El usuario " + user.nombre + " se unio a la familia " + fam.nombre
        return HttpResponse(cadena)
    else:
        return HttpResponse(wrongtype)

@csrf_exempt
def crearobjetivo(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = Usuario.objects.get(pk=data["user"])
        cat = Categoria.objects.get(pk=data["cat"])
        name = data["name"]
        desired = data["desired"]
        achieved = data["achieved"]
        start = data["start"]
        finish = data["finish"]
        obj = Objetivo(usuario = user, categoria = cat, nombre = name, cantidad_deseada = desired, cantidad_alcanzada = achieved, fecha_inicio = start, fecha_fin = finish)
        obj.save()
        return HttpResponse("todo ok")
    else:
        return HttpResponse(wrongtype)

@csrf_exempt
def obtenerrecomendacion(request):
    if request.method == 'GET':
        recomendaciones = [
            "Pequeñas compras pueden sumar. Piensa dos veces antes de gastar en cosas innecesarias. ¡Cada moneda cuenta!",
            "Establece metas de ahorro mensuales y desafíate a ti mismo para alcanzarlas. ¡Cada logro te acerca más al tesoro!",
            "Invierte tiempo en aprender sobre finanzas personales. ¡Mejorar tus habilidades financieras es como subir de nivel en el juego de la vida!",
            "Descubre la tierra de los objetos de segunda mano. ¡Muchos tesoros esperan a ser encontrados a precios más bajos!",
            "Afina tus habilidades de comparación antes de comprar. ¡No te conformes con el primer precio que encuentres, busca la mejor oferta!",
            "Crea tus propias pociones mágicas de limpieza y cuidado personal en casa. ¡Ahorrarás oro y evitarás los encantamientos de precios altos!",
            "Anticípate a eventos financieros importantes como un verdadero estratega. La planificación previa es clave para superar cualquier desafío.",
            "Planifica comidas en grupo para compartir gastos. ¡La estrategia del banquete es un poderoso hechizo para ahorrar oro mientras disfrutas de la compañía!",
            "Desarrolla tus habilidades de negociación para obtener mejores tratos. ¡La diplomacia financiera es una herramienta poderosa en tu arsenal!",
            "No te limites a una sola fuente de oro. Diversifica tus fuentes de ingresos para fortalecer tu posición financiera y enfrentar cualquier emboscada económica."
        ]
        index = random.randint(0, len(recomendaciones))
        rec = recomendaciones[index]
        return HttpResponse(rec)

    else:
        return HttpResponse(wrongtype)
