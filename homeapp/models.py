from tkinter import Image
from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.html import mark_safe
from django.conf import settings

# from io import BytesIO
from PIL import Image
# from django.core.files import File
# import os

class Slider(models.Model):
    image=models.ImageField(upload_to='slider_img', blank=True, null=True)
    header_txt=models.CharField(max_length=100, blank=True, null=True)
    long_txt=models.TextField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.header_txt

    def image_tag(self):
        if self.image != '':
            return mark_safe('<img src="%s%s" width="50" height="50" />' % (f'{settings.MEDIA_URL}', self.image))

class Category(models.Model):
    name = models.CharField(max_length=100,blank=True,null=True)

    def __str__(self):
        return self.name

class Gallery(models.Model):
    image=models.ImageField(upload_to='gallery_img', blank=True, null=True)
    categorys = models.ForeignKey(Category,on_delete=models.CASCADE, blank=True, null=True)
    title=models.CharField( max_length=20, blank=True, null=True)
    text=models.CharField(max_length=50, blank=True, null=True)

    # def save(self,*args,**kwargs):
    #     super(Gallery,self).save(*args,**kwargs)
    #     img = Image.open(self.image.path)
    #     if img.height>300  or img.width>300:
    #         output_size = (300,300)
    #         img.thumbnail(output_size)
    #         img.save(self.image.path)
   

    def __str__(self):
        return self.title

    def image_tag(self):
        if self.image != '':
            return mark_safe('<img src="%s%s" width="50" height="50" />' % (f'{settings.MEDIA_URL}', self.image))




class Review(models.Model):
    image=models.ImageField(upload_to='gallery_img', blank=True, null=True)
    name =models.CharField( max_length=20, blank=True, null=True)
    text=models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.name

    def image_tag(self):
        if self.image != '':
            return mark_safe('<img src="%s%s" width="50" height="50" />' % (f'{settings.MEDIA_URL}', self.image))

class Team(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True)
    job_title= models.CharField(max_length=100,null=True,blank=True)
    image=models.ImageField(upload_to='team_img', blank=True, null=True)
    # network = models.CharField(max_length=100)
    facebook_url = models.URLField(max_length=500,null=True,blank=True)
    instagram_url = models.URLField(max_length=500,null=True,blank=True)

    def __str__(self):
        return self.name

    def image_tag(self):
        if self.image != '':
            return mark_safe('<img src="%s%s" width="50" height="50" />' % (f'{settings.MEDIA_URL}', self.image))

class Faq(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    description = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.title