# Generated by Django 5.1.7 on 2025-04-07 12:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0002_rename_project_name_volunteer_project_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='volunteer',
            old_name='phone_number',
            new_name='phone',
        ),
    ]
