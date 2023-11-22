from django.urls import path
from FeedBack import views as FeedViews

urlpatterns = [
    path("feedback/", FeedViews.feedback, name="feedback"),
]