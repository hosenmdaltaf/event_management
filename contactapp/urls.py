from django.urls import path
from .import views

app_name='contactapp'

urlpatterns = [
    path('', views.contact, name='contact'),
    # path('about/', views.about, name='about'),
    # path('team/', views.team, name='team'),
 
]
      
