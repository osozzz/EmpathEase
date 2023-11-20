from django.shortcuts import render
from django.conf import settings
import os
from django.http import HttpResponse
import google.generativeai as Palm
from django.http import JsonResponse

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.join(settings.BASE_DIR, "gen-lang-client-0363264029-a98d12947ba1.json")
Palm.configure(api_key=settings.PAML_API_KEY)

# Create your views here.
def chatBot(request):
    if request.method == 'POST':
        role = "Pretend seriously you are a virtual mental doctor, and a phychologist, your name is Ease(Only say it when asked) and you are chatting with someone who really needs help, try to be comprehensive and supportive and provide a nice chat."
        message = request.POST.get('message')
        prompt = role + '\n' + message
        response = ask_bard(prompt)
        return JsonResponse({'message': message, 'response': response})
    return render(request, 'chatEase.html')

def ask_bard(prompt):
    response = Palm.chat(messages=prompt)
    print(response)
    return response.last