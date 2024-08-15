from rest_framework import serializers
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'phone', 'progress', 'createdAt')

class GetUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email',)
        extra_kwargs = {
            'password': {'write_only': False},
            'email': {'validators': []},  # Disable the unique validator
        }

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'phone')

class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')
        extra_kwargs = {
            'password': {'write_only': False},
            'email': {'validators': []},  # Disable the unique validator
        }

class UpdateProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'progress')
        extra_kwargs = {
            'password': {'write_only': False},
            'email': {'validators': []},  # Disable the unique validator
        }
        