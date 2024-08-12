from django.urls import path
from .views import index
#in order to access through browser url
urlpatterns = [
    path('', index),
    path('login', index),
    path('register', index),
    path('profile', index),
    path('content', index),
    path('discussion', index),
    path('about', index),
]
