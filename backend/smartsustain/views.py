from django.shortcuts import render
from .models import *
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
wrongtype = "Tipo de petición no soportado para la operación"

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