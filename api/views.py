from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import requests
from django.http import JsonResponse
import json
import openai
from .models import User
from .serializers import UserSerializer, CreateUserSerializer, LoginUserSerializer, GetUserSerializer, UpdateProgressSerializer
from transformers import GPT2LMHeadModel, GPT2Tokenizer

class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GetUser(APIView):
    serializer_class = GetUserSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            if not email:
                return Response({"detail": "Email parameter is required."}, status=status.HTTP_400_BAD_REQUEST)
            try:
                user = User.objects.get(email=email)  # Fetch the user by email
                serializer = UserSerializer(user)
                return Response(serializer.data)
            except User.DoesNotExist:
                return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Invalid Serializer...'}, status=status.HTTP_400_BAD_REQUEST)

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
                serializer = UserSerializer(found_user[0])
                return Response(
                    serializer.data if is_valid else "Invalid credentials",
                    status=status.HTTP_200_OK if is_valid else status.HTTP_401_UNAUTHORIZED
                )
            else:
                return Response({'Bad Request': 'User does not exist...'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Bad Request': 'Invalid Serializer...'}, status=status.HTTP_400_BAD_REQUEST)
    
class UpdateProgressView(APIView):
    serializer_class = UpdateProgressSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            progress = serializer.data.get('progress')
            
            queryset = User.objects.filter(email=email)
            if queryset.exists():
                user = queryset[0]
                user.progress = progress
                user.save(update_fields=['progress'])
                return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            else:
                return Response({'Bad Request': 'Could not find user...'}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'Bad Request': 'Invalid Serializer...'}, status=status.HTTP_400_BAD_REQUEST)



class ChatGPTView(APIView):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # Load pre-trained model and tokenizer
        self.model_name = 'gpt2'
        self.tokenizer = GPT2Tokenizer.from_pretrained(self.model_name)
        self.model = GPT2LMHeadModel.from_pretrained(self.model_name)

    def generate_learning_content(self, prompt):
        # Tokenize the input without padding
        inputs = self.tokenizer(prompt, return_tensors='pt', truncation=True)
        
        # Generate the response from the model
        outputs = self.model.generate(
            inputs['input_ids'],
            max_length=150,  # Adjust length as needed
            num_return_sequences=1,
            temperature=0.7,  # Adjust temperature for variety
            do_sample=True,   # Enable sampling to use temperature
            pad_token_id=self.tokenizer.eos_token_id  # Set pad_token_id to eos_token_id
        )
        
        # Decode the response
        reply = self.tokenizer.decode(outputs[0], skip_special_tokens=True).strip()

        return reply

    def post(self, request, format=None):
        user_input = request.data.get("user_input")
        if not user_input:
            return Response({"error": "Missing 'user_input' in request body"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Generate the content using the combined function
            reply = self.generate_learning_content(user_input)

            # Return the generated content
            return Response({"reply": reply}, status=status.HTTP_200_OK)

        except Exception as e:
            # Log the error and return an error response
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
       