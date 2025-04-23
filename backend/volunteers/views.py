from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.exceptions import PermissionDenied
from .models import Volunteer
from .serializers import VolunteerSerializer


# ✅ Admin-only login
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        if not self.user.is_staff:
            raise PermissionDenied("Only admin users can log in.")
        return data


class AdminLoginView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


# ✅ Volunteer API ViewSet
class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

    def get_permissions(self):
        """
        Public can apply (POST), all other actions restricted to admin.
        """
        if self.action == 'create':
            return [permissions.AllowAny()]  # Public registration
        return [permissions.IsAdminUser()]   # Admin only for view/update/delete

    def list(self, request, *args, **kwargs):
        """
        ✅ Only admins can view the list of volunteers.
        """
        if not request.user.is_staff:
            raise PermissionDenied("Only admins can view volunteers.")
        return super().list(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        """
        ✅ Only admins can view a specific volunteer.
        """
        if not request.user.is_staff:
            raise PermissionDenied("Only admins can view a volunteer.")
        return super().retrieve(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        """
        ✅ Anyone (public) can apply to become a volunteer.
        """
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        """
        ✅ Only admins can approve or reject volunteers.
        """
        if not request.user.is_staff:
            raise PermissionDenied("Only admins can update volunteer status.")

        volunteer = self.get_object()
        new_status = request.data.get("status")

        if new_status not in ["approved", "rejected"]:
            return Response({"detail": "Invalid status."}, status=status.HTTP_400_BAD_REQUEST)

        volunteer.status = new_status
        volunteer.save()
        return Response({"status": f"Volunteer {new_status} successfully."}, status=status.HTTP_200_OK)

    def destroy(self, request, *args, **kwargs):
        """
        ✅ Only admins can delete volunteer entries.
        """
        if not request.user.is_staff:
            raise PermissionDenied("Only admins can delete volunteer entries.")
        return super().destroy(request, *args, **kwargs)