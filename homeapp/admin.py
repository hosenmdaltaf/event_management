from django.contrib import admin


from .models import Slider,Gallery,Review,Category,Team,Faq

class Sliderlist(admin.ModelAdmin):
    list_display = ('header_txt','image_tag')
admin.site.register(Slider,Sliderlist)

class Gallerylist(admin.ModelAdmin):
    list_display = ('title', 'categorys','image_tag')
admin.site.register(Gallery,Gallerylist)

admin.site.register(Category)

class Reviewlist(admin.ModelAdmin):
    list_display = ('name','image_tag')

admin.site.register(Review,Reviewlist)

class Teamlist(admin.ModelAdmin):
    list_display = ('name','image_tag','job_title')
    
admin.site.register(Team,Teamlist)

admin.site.register(Faq) 
