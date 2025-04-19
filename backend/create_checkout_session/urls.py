from django.urls import path
from .views import create_checkout_session, verify_session

urlpatterns = [
    path('api/stripe/create-checkout-session/', create_checkout_session, name='create_checkout_session'),
    path('api/stripe/verify-session/<str:session_id>/', verify_session, name='verify_session'),
]
