from django.urls import path
from ChatBot import views as ChatViews

urlpatterns = [
    path("chatEase/", ChatViews.chatBot, name="chat")
]