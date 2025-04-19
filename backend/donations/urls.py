from django.urls import path
from .views import donation_create

urlpatterns = [
    path('donations/',donation_create, name='donation_create'),   
]