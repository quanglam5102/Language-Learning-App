from django.urls import path
from .views import UserView, CreateUserView, Login, GetUser, UpdateProgressView

urlpatterns = [
    path('user', UserView.as_view()),
    path('get-user', GetUser.as_view()),
    path('create-user', CreateUserView.as_view()),
    path('login', Login.as_view()),
    path('update-progress', UpdateProgressView.as_view()),
]