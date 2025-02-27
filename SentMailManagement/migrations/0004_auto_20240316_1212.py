# Generated by Django 3.2.10 on 2024-03-16 05:12

import django.contrib.postgres.fields
import django.contrib.postgres.fields.hstore
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SentMailManagement', '0003_auto_20231201_0923'),
    ]

    operations = [
        migrations.AddField(
            model_name='systemmailmail',
            name='list_mail_target',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.hstore.HStoreField(), blank=True, help_text='Danh sách người nhận mail', null=True, size=None),
        ),
        migrations.AddField(
            model_name='systemmailmail',
            name='list_mail_to',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=500), blank=True, default=None, help_text='Danh sách nhận mail', null=True, size=None),
        ),
    ]
