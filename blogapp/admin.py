from django.contrib import admin
from .models import Blog,Comment


class Bloglist(admin.ModelAdmin):
    list_display = ('title','writer','post_date','image_tag')
admin.site.register(Blog,Bloglist)

admin.site.register(Comment)
