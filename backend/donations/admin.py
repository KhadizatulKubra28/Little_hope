from django.contrib import admin
from .models import Donation

# Admin configuration for Donation model
class DonationAdmin(admin.ModelAdmin):
    list_display = ('name', 'amount', 'message')
    search_fields = ('name', 'amount')
    list_filter = ('amount',)
    ordering = ('amount',)

# Register the models with the admin panel
admin.site.register(Donation, DonationAdmin)