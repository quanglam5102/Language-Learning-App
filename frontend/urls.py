from django.urls import path, re_path
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
    path('quiz', index),
    path('goals', index),
    re_path(r'^.*$', index),
]
