from django.contrib import admin

from .models import Contact


class Contactlist(admin.ModelAdmin):
    list_display = ('name', 'email','phonenumber')
admin.site.register(Contact,Contactlist)
