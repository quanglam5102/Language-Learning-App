from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50, unique=False)
    phone = models.CharField(max_length=10, unique=False)
    progress = models.IntegerField(null=False, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)