import string
from .models import User
from django.utils.crypto import get_random_string
import requests
from celery import shared_task
import json 
from . import jalali 
from django.shortcuts import render

@shared_task
def create_random_user_accounts(total):
    for i in range(total):
        username = 'user_{}'.format(get_random_string(10, string.ascii_letters))
        email = '{}@example.com'.format(username)
        password = get_random_string(50)
        User.objects.create_user(username=username, email=email, password=password)
    return '{} random users created with success!'.format (total)


@shared_task
def add(m,n):
    return m + n
