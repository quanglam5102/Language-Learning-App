from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer, CreateUserSerializer, LoginUserSerializer

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            phone = serializer.data.get('phone')
            
            queryset = User.objects.filter(email=email)
            if queryset.exists():
                return Response({'error': 'User already exists'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user = User(
                    username=username,
                    email=email,
                    password=password,
                    phone=phone
                )
                user.save()
                return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid Serializer...'}, status=status.HTTP_400_BAD_REQUEST)
    
class Login(APIView):
    serializer_class = LoginUserSerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            found_user = User.objects.filter(email=email)
            if(found_user):
                is_valid = found_user[0].password == password
                return Response(
                    found_user[0].username if is_valid else "Invalid credentials",
                    status=status.HTTP_200_OK if is_valid else status.HTTP_401_UNAUTHORIZED
                )
            else:
                return Response({'Bad Request': 'User does not exist...'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Bad Request': 'Invalid Serializer...'}, status=status.HTTP_400_BAD_REQUEST)