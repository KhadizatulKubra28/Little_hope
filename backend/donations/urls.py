from django.urls import path
from .views import donation_create, donation_analytics

urlpatterns = [
    path('donations/',donation_create, name='donation_create'),  
    path('donations/analytics/', donation_analytics, name='donation_analytics'), 
]