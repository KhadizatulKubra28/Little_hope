from django.contrib import admin
from .models import Volunteer

# Admin configuration for Volunteer model
class VolunteerAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'address', 'project', 'message')
    search_fields = ('name', 'phone',  'email')
    list_filter = ('project',)
    ordering = ('name',)

# Register the models with the admin panel
admin.site.register(Volunteer, VolunteerAdmin)