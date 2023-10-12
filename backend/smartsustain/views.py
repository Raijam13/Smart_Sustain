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
                "categoria" : m.categoria.nombre,
                "cantidad" : m.cantidad,
                "fecha" : str(m.fecha)
            })
        dict = {"lista" : lista}
        return HttpResponse(json.dumps(dict))
    else:
        return HttpResponse(wrongtype)
    
@csrf_exempt
def validarlogin(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data["email"]
        passw = data["password"]
        UsuariosQuerySet = Usuario.objects.all()
        resp = {"resp" : "no_user"}
        for u in UsuariosQuerySet:
            if u.email == email:
                if u.password == passw:
                    resp["resp"] = "login_ok"
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
    