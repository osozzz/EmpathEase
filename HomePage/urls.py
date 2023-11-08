from django.urls import path
from HomePage import views as HomeViews

urlpatterns = [
    path("", HomeViews.home_view, name="home"),
]