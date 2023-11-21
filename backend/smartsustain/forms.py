from django import forms
from .models import Movimiento

class GastoForm(forms.ModelForm):
    class Meta:
        model = Movimiento
        #fields = ['categoria', 'cantidad', 'fecha']
        fields = ['cantidad', 'fecha']