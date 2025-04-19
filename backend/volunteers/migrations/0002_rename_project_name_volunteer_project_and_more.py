# Generated by Django 5.1.7 on 2025-04-07 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volunteers', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='volunteer',
            old_name='project_name',
            new_name='project',
        ),
        migrations.AddField(
            model_name='volunteer',
            name='address',
            field=models.CharField(default=100, max_length=150),
            preserve_default=False,
        ),
    ]
