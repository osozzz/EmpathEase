from django.urls import path, include
from Authentication import views as AuthViews

urlpatterns = [
    path("login/", AuthViews.login, name="login"),
    path("register/", AuthViews.register, name="register"),
    path("logout/", AuthViews.logout, name="logout"),
]
