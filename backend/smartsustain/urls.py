from django.urls import path
from . import views
from .views import crear_gasto, visualizar_gastos
from .views import visualizar_objetivos

urlpatterns = [
    path("movimientos", views.obtenermovimientos),
    path("login", views.validarlogin),
    path("register", views.userregister),
    path("modnombres", views.modnombres),
    path("modapellidos", views.modapellidos),
    path("modmail", views.modemail),
    path("modclave", views.modclave),
    path("deleteuser", views.eliminarcuenta),
    path("crearmovimiento", views.crearmovimiento),
    path("modmovimiento", views.modmovimiento),
    path("deletemovimiento", views.borrarmovimiento),
    path("perfil", views.perfil),
    path("obtenerusuarios", views.obtener_usuarios),  
    path("eliminarmovimiento", views.EliminarMovimiento),
    path('crear_gasto/', crear_gasto, name='crear_gasto'),#
    path('visualizar_gastos/', visualizar_gastos, name='visualizar_gastos'),#
    path("crearfamilia",views.crearfamilia),
    path("unirfamilia",views.unirfamilia),
    path("crearobjetivo",views.crearobjetivo),
    path("obtenerrecomendacion",views.obtenerrecomendacion),
     path('visualizar_objetivos/', visualizar_objetivos, name='visualizar_objetivos'),#
]