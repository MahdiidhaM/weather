from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User

class SignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email','password1','password2']

class BlogFormset(forms.Form):
    information = forms.CharField(max_length=10)

class SetFormset(forms.Form):
    info = forms.CharField(max_length=40)

class Tempformset(forms.Form):
    choice = (
        ('imperial','F'),
        ('metric','C'),
    )
    temp = forms.ChoiceField(choices=choice)

