from django.urls import path
from . import views

urlpatterns = [
    path("movimientos", views.obtenermovimientos),
    path("login", views.validarlogin)
]