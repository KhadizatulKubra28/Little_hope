from django.urls import path
from .views import volunteer_create

urlpatterns = [
    path('volunteers/',volunteer_create, name='volunteer_create'),
    
]