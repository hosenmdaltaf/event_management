from email.policy import default
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

class Category(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return str(self.name)

class Priceing(models.Model):
    name=models.CharField(max_length=50)
    category =models.ForeignKey(Category,on_delete=models.CASCADE)
    price = models.IntegerField(null=True,blank=True)
    details =RichTextUploadingField(default="sevice details")
    condition = models.TextField(null=True,blank=True)

    def __str__(self):
        return str(self.name)