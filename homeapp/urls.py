from django.urls import path
from . import views

app_name='homeapp'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('about/', views.about, name='aboutpage'),
    path('gallery/', views.gallery, name='gallerypage'),
    path('team/', views.team, name='teampage'),

]