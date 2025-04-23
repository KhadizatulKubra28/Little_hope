from rest_framework import status
from rest_framework.response import Response
from django.db.models import Sum
from django.db.models.functions import TruncMonth
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny  # Permission class to require authentication
from volunteers.models import Volunteer
from .models import Donation
from .serializers import DonationSerializer, PublicDonationSerializer


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
        serializer = PublicDonationSerializer(donations, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def donation_analytics(request):
    try:
        total_donations = Donation.objects.aggregate(total=Sum('amount'))['total'] or 0

        top_donors = Donation.objects.values('name')\
            .annotate(total=Sum('amount'))\
            .order_by('-total')[:5]

        monthly_donations = Donation.objects.extra(select={'month': "strftime('%%Y-%%m', created_at)"})\
            .values('month')\
            .annotate(total=Sum('amount'))\
            .order_by('month')
        
        active_volunteers_count = Volunteer.objects.filter(status="approved").count()

        return Response({
            "total_donations": total_donations,
            "top_donors": list(top_donors),
            "monthly_donations": list(monthly_donations),
            "active_volunteers": active_volunteers_count
        })
    except Exception as e:
        import traceback
        traceback.print_exc()
        return Response({"error": str(e)}, status=500)