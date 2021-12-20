from django.urls import path
from .views import weather
from .views import UsersListView,GenerateRandomUserView
urlpatterns = [
    path('',weather,name='view'),
    # path('prac/',practice,name='view'),
    path('users/', UsersListView.as_view(), name='users_list'),
    path('generate/', GenerateRandomUserView.as_view(), name='generate')
]