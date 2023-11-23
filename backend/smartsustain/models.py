from django.db import models
from django.db import models
from django.contrib.auth.models import User

class Familia(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Usuario(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre + " " + self.apellido
    
class Notificacion(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre

class Categoria(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre + " - " + self.usuario.nombre + " " + self.usuario.apellido

          
class Movimiento(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    #categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    cantidad = models.FloatField()
    fecha = models.CharField(max_length=20)

    def __str__(self) :
        return self.usuario.nombre + " " + self.usuario.apellido + " " + str(self.fecha)
    
class Objetivo(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete= models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete= models.CASCADE)
    nombre = models.CharField(max_length=255)
    cantidad_deseada = models.FloatField()
    cantidad_alcanzada = models.FloatField()
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    
    def __str__(self):
        return self.nombre
    
# models.py
from django.db import models


class UsuarioXFamilia(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    familia = models.ForeignKey(Familia, on_delete=models.CASCADE)
    admin = models.BooleanField(default = False)

    def __str__(self):
        return self.usuario.nombre + " - " + self.familia.nombre
