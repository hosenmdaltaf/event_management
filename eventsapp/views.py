from django.shortcuts import render
from eventsapp.models import Category,Priceing

def packages(request):
    category = request.GET.get('category')
    if category == None:
        price_pacakges = Priceing.objects.all()
    else:
        price_pacakges = Priceing.objects.filter(category__name=category)
    categorys = Category.objects.all() 
 

    # price_pacakges =Priceing.objects.all()
    return render(request,'eventsapp/packages.html',{'categorys':categorys,'price_pacakges':price_pacakges})