# Generated by Django 5.1.7 on 2025-04-07 06:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('donations', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='donation',
            name='email',
        ),
        migrations.RemoveField(
            model_name='donation',
            name='phone_number',
        ),
    ]
