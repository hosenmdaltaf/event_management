# Generated by Django 3.2 on 2022-01-06 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0007_auto_20220105_1137'),
    ]

    operations = [
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
