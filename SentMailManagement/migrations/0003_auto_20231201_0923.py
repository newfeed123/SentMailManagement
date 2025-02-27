# Generated by Django 3.2.10 on 2023-12-01 02:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SentMailManagement', '0002_systemmailserverconfig_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='systemmailserverconfig',
            name='active',
        ),
        migrations.AddField(
            model_name='systemmailmail',
            name='mail_to',
            field=models.CharField(blank=True, help_text='Cá nhân/nhóm nhận mail', max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='systemmailsenderconfig',
            name='active',
            field=models.BooleanField(blank=True, default=True, help_text='Người tạo', null=True),
        ),
        migrations.AddField(
            model_name='systemmailsenderconfig',
            name='number_sent',
            field=models.IntegerField(blank=True, default=0, help_text='Người tạo', null=True),
        ),
    ]
