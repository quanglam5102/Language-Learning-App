from django.urls import path
from .views import UserView, CreateUserView, Login

urlpatterns = [
    path('user', UserView.as_view()),
    path('create-user', CreateUserView.as_view()),
    path('login', Login.as_view())
]