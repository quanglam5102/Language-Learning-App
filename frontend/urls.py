from django.urls import path
from .views import index
#in order to access through browser url
urlpatterns = [
    path('', index),
    path('login', index),
    path('register', index),
<<<<<<< HEAD
    path('profile', index),
    path('content', index),
    path('about', index),
]
=======
    path('content', index)
]
>>>>>>> 78a02c8e7b4f7cfe8879bb3e8d497662a5f19df8
