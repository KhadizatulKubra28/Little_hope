from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from .views import VolunteerViewSet, AdminLoginView

# Set up the router for volunteer-related actions
router = DefaultRouter()
router.register(r'volunteers', VolunteerViewSet)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # JWT token obtain
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # JWT token refresh
    path('admin/login/', AdminLoginView.as_view(), name='admin_login'),  # Admin login (JWT)
    path('', include(router.urls)),  # All volunteer-related API actions
]
