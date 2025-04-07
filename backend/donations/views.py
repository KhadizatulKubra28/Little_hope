from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny  # Permission class to require authentication
from .models import Donation
from .serializers import DonationSerializer

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])  # Restrict access to authenticated users
def donation_create(request):
    if request.method == 'POST':
        serializer = DonationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':  # Allow retrieving all donations
        donations = Donation.objects.all()
        serializer = DonationSerializer(donations, many=True)
        return Response(serializer.data)