# Generated by Django 4.2.20 on 2025-05-13 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_post'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='more_details_for_the_dedicated_page',
            field=models.TextField(default=' ', max_length=1000),
        ),
    ]
