from django.db import models

# Donation Model
class Donation(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    message = models.TextField()

    def __str__(self):
        return f"{self.name} - ${self.name}"

