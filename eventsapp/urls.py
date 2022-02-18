from django.urls import path
from . import views

app_name='eventsapp'

urlpatterns = [ 
    path('', views.packages, name='packages'), 
]