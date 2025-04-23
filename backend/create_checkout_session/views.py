import json
import stripe
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

@csrf_exempt
def create_checkout_session(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            amount = int(float(data.get('amount', 50)) * 100)

            session = stripe.checkout.Session.create(
                payment_method_types=["card"],
                line_items=[{
                    "price_data": {
                        "currency": "usd",
                        "product_data": {
                            "name": "Little Hope Donation",
                        },
                        "unit_amount": amount,
                    },
                    "quantity": 1,
                }],
                mode="payment",
                success_url=settings.DOMAIN + "/donation-success?session_id={CHECKOUT_SESSION_ID}",
                cancel_url=settings.DOMAIN + "/donation-cancelled",
            )

            return JsonResponse({"url": session.url})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    return JsonResponse({"error": "Invalid request method"}, status=400)

# ✅ Properly handle POST requests for verifying session
@csrf_exempt
def verify_session(request, session_id):
    if request.method == "POST":
        try:
            session = stripe.checkout.Session.retrieve(session_id)
            return JsonResponse({
                'session_id': session_id,
                'email': session.customer_details.email if session.customer_details else None,
                'amount_total': session.amount_total,
                'payment_status': session.payment_status,
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({"error": "Invalid request method. Only POST allowed."}, status=405)
