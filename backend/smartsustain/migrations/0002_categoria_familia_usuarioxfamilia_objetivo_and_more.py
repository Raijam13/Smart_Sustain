# Generated by Django 4.2.7 on 2023-11-20 23:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('smartsustain', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='smartsustain.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Familia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('descripcion', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='UsuarioXFamilia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('admin', models.BooleanField()),
                ('familia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='smartsustain.familia')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='smartsustain.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Objetivo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('cantidad_deseada', models.FloatField()),
                ('cantidad_alcanzada', models.FloatField()),
                ('fecha_inicio', models.DateTimeField()),
                ('fecha_fin', models.DateTimeField()),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='smartsustain.categoria')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='smartsustain.usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Notificacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('descripcion', models.TextField()),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='smartsustain.usuario')),
            ],
        ),
    ]