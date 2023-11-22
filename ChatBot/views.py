from django.shortcuts import render
from django.conf import settings
import os
from django.http import HttpResponse
import google.generativeai as Palm
from django.http import JsonResponse
from .models import Chat
from django.utils import timezone

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.join(settings.BASE_DIR, "gen-lang-client-0363264029-a98d12947ba1.json")
Palm.configure(api_key=settings.PAML_API_KEY)

# Create your views here.
def chatBot(request):
    chats = Chat.objects.filter(user=request.user)
    if request.method == 'POST':
        message = request.POST.get('message')
        response = ask_bard(message)
        chat = Chat(user=request.user, message=message, response=response, created_at=timezone.now())
        chat.save()
        return JsonResponse({'message': message, 'response': response})
    return render(request, 'chatEase.html', {'chats': chats})

def ask_bard(prompt):
    role = "You are a virtual phychologist, your name is Ease, your job is to provide help and support when asked. Try to be comprehensive."
    response = Palm.chat(context=role, messages=prompt, temperature=0.2, candidate_count=1)
    print(response)
    return response.last