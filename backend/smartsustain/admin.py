from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Usuario)
admin.site.register(models.Categoria)
admin.site.register(models.Familia)
admin.site.register(models.Notificacion)
admin.site.register(models.Objetivo)
admin.site.register(models.Movimiento)
admin.site.register(models.UsuarioXFamilia)
