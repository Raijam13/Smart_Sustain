# Generated by Django 4.2.7 on 2023-11-21 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('smartsustain', '0003_alter_usuarioxfamilia_admin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='objetivo',
            name='fecha_fin',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='objetivo',
            name='fecha_inicio',
            field=models.CharField(max_length=255),
        ),
    ]