from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny  # Permission class to require authentication
from .models import Volunteer
from .serializers import VolunteerSerializer

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])  # Restrict access to authenticated users
def volunteer_create(request):
    if request.method == 'POST':
        serializer = VolunteerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':  # Allow retrieving all donations
        volunteers = Volunteer.objects.all()
        serializer = VolunteerSerializer(volunteers, many=True)
        return Response(serializer.data)