from django.shortcuts import render
from .models import *
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def obtenermovimientos(request):
    lista = []
    data = json.loads(request.body)
    user = data["usuario"]
    if request.method == "POST":
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