from django.shortcuts import render
from homeapp.models import Slider,Review,Gallery,Category,Team,Faq
from contactapp.models import Contact
from django.contrib import messages
# from blogapp.models import Blog
from django.conf import settings
from eventsapp.models import Priceing


def homepage(request):
    sliders = Slider.objects.all()[:3]
    faqs=Faq.objects.all()
    teams= Team.objects.order_by('-pk')[:6]
    reviews = Review.objects.all()
    price_pacakges =Priceing.objects.all()[:3]
    return render(request,'homeapp/homepage.html',{'sliders':sliders,'reviews':reviews,
    'teams':teams,'price_pacakges':price_pacakges,'faqs':faqs})

def team(request): 
     teams= Team.objects.order_by('-pk')
     return render(request,'homeapp/team.html',{'teams':teams})


def gallery(request):
    category = request.GET.get('category')
    if category == None:
         gallerys = Gallery.objects.all()
    else:
         gallerys = Gallery.objects.filter(categorys__name=category)
    categories = Category.objects.all() 

    
    return render(request,'homeapp/gallery.html',{'gallerys':gallerys,'categories':categories})

def about(request):
     teams= Team.objects.all()[:3]
     reviews = Review.objects.all()
     gallerys = Gallery.objects.all()[:2]
     return render(request,'homeapp/about.html',{'reviews':reviews,'teams':teams,'gallerys':gallerys})




