from django.shortcuts import render
from django.http import HttpResponse
from .models import FeedBack

# Create your views here.
def feedback(request):
    if request.method=="POST":
        name=request.POST["name"]
        email=request.POST["email"]
        feedBack=request.POST["feedback"]
        
        feed = FeedBack(name=name, email=email, Feedback=feedBack)
        feed.save()
        print(f"The name is {name}, email: {email}, ")
        return render(request, 'feedback.html')
        
    return render(request, 'feedback.html')
