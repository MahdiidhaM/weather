import json
import requests
from . import jalali
from .models import City
from .models import User
from django.core import serializers
from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import redirect
from django.forms import formset_factory
from .form import GenerateRandomUserForm
from django.views.generic import ListView
from django.shortcuts import redirect, render
from .tasks import create_random_user_accounts
from django.views.generic.edit import FormView
from django.contrib.auth import authenticate, login,logout
from .forms import SignupForm,BlogFormset,SetFormset,Tempformset

UNIT_GROUP="us"
def weather(request):
    signup = SignupForm()
    if 'username' and 'last_name' and 'first_name' and 'email' and 'password1' and 'password2' in request.POST:
        sign = SignupForm(request.POST)
        if sign.is_valid():
            sign.save()
        else:
            signup = SignupForm()
    if 'username' and 'password' in request.POST:
        form = authenticate(request,username=request.POST['username'],password=request.POST['password'])
        if form is not None:
            login(request,form)
            redirect('/')

    API_KEY="9a7dd8460faa9ecfc79e18f6ce597a78"
    if 'temp' in request.POST:
        
        global UNIT_GROUP
        UNIT_GROUP = request.POST['temp']
    if 'city' in request.POST:
        city = request.POST['city']
        total = []
        response = requests.get(f"http://api.openweathermap.org/data/2.5/forecast?q={city}&units={UNIT_GROUP}&id=524901&appid={API_KEY}" )
        informations = json.loads(response.text)
        total = []
        name_city = informations['city']['name']
        name_country = informations['city']['country']
        informations = json.loads(response.text)
        for i in informations['list']:
            p = str(i['dt_txt']).split(' ')
            convert_date = jalali.Gregorian(p[0]).persian_string()
            spl = convert_date.split('-')
            converted_data = '/'.join(spl)
            total.extend([[i['main']['temp'],i['main']['temp_max'],i['main']['temp_min'],i['weather'][0]['description'],spl[-1],i['weather'][0]['icon'],converted_data]])
        context = {
            'address':name_country + ' ' + name_city.capitalize(),
            'description1':total[0][3],
            'icon1':total[0][-2],
            'date1':total[0][-1],
            'temp1':total[0][0],
            'tempmax1':total[0][1],
            'tempmin1':total[0][2],
            'spl1':total[0][4],
            'description2':total[1][3],
            'icon2':total[1][-2],
            'date2':total[1][-1],
            'temp2':total[1][0],
            'tempmax2':total[1][1],
            'tempmin2':total[1][2],
            'spl2':total[1][4],
            'description3':total[2][3],
            'icon3':total[2][-2],
            'date3':total[2][-1],
            'temp3':total[2][0],
            'tempmax3':total[2][1],
            'tempmin3':total[2][2],
            'spl3':total[2][4],
            'description4':total[3][3],
            'icon4':total[3][-2],
            'date4':total[3][-1],
            'temp4':total[3][0],
            'tempmax4':total[3][1],
            'tempmin4':total[3][2],
            'spl4':total[3][4],
            'description5':total[4][3],
            'icon5':total[4][-2],
            'date5':total[4][-1],
            'temp5':total[4][0],
            'tempmax5':total[4][1],
            'tempmin5':total[4][2],
            'spl5':total[4][4],
            'description6':total[5][3],
            'icon6':total[5][-2],
            'date6':total[5][-1],
            'temp6':total[5][0],
            'tempmax6':total[5][1],
            'tempmin6':total[5][2],
            'spl6':total[5][4],
            'description7':total[6][-2],
            'icon7':total[6][-1],
            'date7':total[6][0],
            'temp7':total[6][1],
            'tempmax7':total[6][2],
            'tempmin7':total[6][3],
            'sunrise7':total[6][4],
            'sunset7':total[6][5],
            'spl7':total[6][6],
            'UNIT_GROUP':UNIT_GROUP,
            'signupform':signup
            
        }
        return render(request,'origin/index.html',context)
    return render(request,'origin/index.html',{'UNIT_GROUP':UNIT_GROUP,'signupform':signup})



class UsersListView(ListView):
    template_name = 'user_list.html'
    model = User

class GenerateRandomUserView(FormView):
    template_name = 'generate_random_user.html'
    form_class = GenerateRandomUserForm

    def form_valid(self, form):
        total = form.cleaned_data.get('total')

        create_random_user_accounts.delay(total)
        messages.success(self.request, 'We are generating your random users! Wait a moment and refresh this page.')
        return redirect('users_list')
