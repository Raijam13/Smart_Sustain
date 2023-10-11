from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    familia = models.ForeignKey(Familia, on_delete=models.CASCADE)
    email = models.EmailField()
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre + self.apellido
    
class Familia(models.Model):
    creador = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre
    
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