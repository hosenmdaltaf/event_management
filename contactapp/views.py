from django.shortcuts import render

from contactapp.models import Contact
from django.contrib import messages
# from classes.models import Services
# from homeapp.models import Gallery

# from classes.sms import smsapi

from django.views.decorators.csrf import csrf_protect

@csrf_protect
def contact(request):
    if request.method == "POST":
        try:
            name = request.POST.get("name")
            email = request.POST.get("email")
            message = request.POST.get("message")
            phonenumber = request.POST.get("phonenumber") 
            print('----------------------test1------------------')
            print(name)
            print(email)
            print(message)
            print(phonenumber)
            Contact.objects.create(name=name,message=message,phonenumber=phonenumber,email=email)
            return render(request,'global/thankyou.html')
        except:
            messages.warning(request, 'Please fill up all the form feild currectly!')
    return render(request,'contactapp/contact.html')