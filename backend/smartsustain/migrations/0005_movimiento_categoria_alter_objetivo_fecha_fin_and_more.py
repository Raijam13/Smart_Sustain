# Generated by Django 4.2.7 on 2023-11-26 03:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('smartsustain', '0004_alter_objetivo_fecha_fin_alter_objetivo_fecha_inicio'),
    ]

    operations = [
        migrations.AddField(
            model_name='movimiento',
            name='categoria',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='smartsustain.categoria'),
        ),
        migrations.AlterField(
            model_name='objetivo',
            name='fecha_fin',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='objetivo',
            name='fecha_inicio',
            field=models.DateField(),
        ),
    ]
