from django.contrib import admin

from .models import Category,Priceing

admin.site.register(Category)

class Priceinglist(admin.ModelAdmin):
    list_display = ('name', 'category','price')
admin.site.register(Priceing,Priceinglist)
