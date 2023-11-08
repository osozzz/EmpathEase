from django.shortcuts import render
from django.http import HttpResponse
from bardapi import Bard
import os
import time
from django.http import JsonResponse

os.environ['_BARD_API_KEY'] = "cwgiCRhZhglzplE817AC3I3__lEIdEyLyV8dFKk5kKVw1KVT01KkDKHa0SSv-CNFxJo5vQ."

# Create your views here.
def chatBot(request):
    if request.method == 'POST':
        message = request.POST.get('message')
        response = ask_bard(message)
        return JsonResponse({'message': message, 'response': response})
    return render(request, 'chatEase.html')

def ask_bard(prompt):
    response = Bard().get_answer(prompt)['content']
    return response