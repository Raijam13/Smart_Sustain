from django.urls import path
from . import views

urlpatterns = [
    path("movimientos", views.obtenermovimientos),
    path("login", views.validarlogin),
    path("register", views.userregister),
    path("modnombres", views.modnombres),
    path("modapellidos", views.modapellidos),
    path("modmail", views.modemail),
    path("modclave", views.modclave),
    path("deleteuser", views.eliminarcuenta),
]