# Generated by Django 3.2.10 on 2024-03-25 07:55

import SentMailManagement.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SentMailManagement', '0004_auto_20240316_1212'),
    ]

    operations = [
        migrations.AddField(
            model_name='systemmailmail',
            name='file_attachment',
            field=models.FileField(help_text='Tệp đính kèm', null=True, upload_to=SentMailManagement.models._upload_to),
        ),
    ]
