from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('donations.urls')),
    path('api/', include('volunteers.urls')),
    path("", include('create_checkout_session.urls')),   # Corrected module name
]