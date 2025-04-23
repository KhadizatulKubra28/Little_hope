from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow admins to edit the volunteer or donation data.
    Others can only view it.
    """
    def has_permission(self, request, view):
        # Allow GET request to anyone (for read-only access), otherwise only admins
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_staff