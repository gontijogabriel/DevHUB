from django.shortcuts import redirect
from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics, permissions

from users.models import User

from datetime import datetime, timedelta

from users.serializers import UserProfileSerializer

import requests
import jwt


class GitHubAuthView(APIView):
    def post(self, request):
        code = request.data.get('code')
        if not code:
            return Response({"error": "Authorization code not provided"}, status=400)

        token_url = 'https://github.com/login/oauth/access_token'
        token_data = {
            'client_id': settings.GITHUB_CLIENT_ID,
            'client_secret': settings.GITHUB_CLIENT_SECRET,
            'code': code,
        }
        headers = {'Accept': 'application/json'}
        token_response = requests.post(token_url, data=token_data, headers=headers)
        token_json = token_response.json()
        access_token = token_json.get('access_token')

        if not access_token:
            return Response({"error": "Failed to obtain access token from GitHub"}, status=400)

        user_url = 'https://api.github.com/user'
        user_response = requests.get(user_url, headers={'Authorization': f'token {access_token}'})
        user_json = user_response.json()

        user, created = User.objects.get_or_create(
            username=user_json.get('login'),
            defaults={
                'first_name': user_json.get('name').split()[0] if user_json.get('name') else '',
                'last_name': user_json.get('name').split()[1] if len(user_json.get('name').split()) > 1 else '',
                'avatar_url': user_json.get('avatar_url'),
                'location': user_json.get('location'),
            }
        )

        refresh = RefreshToken.for_user(user)
        access = self.create_access_token(user)

        return Response({
            'refresh': str(refresh),
            'access': str(access),
        })

    def create_access_token(self, user):
        payload = {
            'user_id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'avatar': user.avatar_url,
            'location': user.location,
            'exp': datetime.utcnow() + timedelta(hours=12),
            'iat': datetime.utcnow()
        }
        access_token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
        return access_token


class GitHubLoginRedirectView(APIView):
    def get(self, request):
        github_auth_url = (
            f"https://github.com/login/oauth/authorize?client_id={settings.GITHUB_CLIENT_ID}"
            f"&redirect_uri={settings.GITHUB_REDIRECT_URI}&scope=read:user"
        )
        return redirect(github_auth_url)


class GitHubCallbackView(APIView):
    def get(self, request):
        code = request.GET.get('code')
        if not code:
            return Response({"error": "Authorization code not found"}, status=400)

        return redirect(f"http://localhost:3000/?code={code}")
    


class UserProfileSerializer(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    
    def get_object(self):
        username = self.kwargs.get('username')
        return User.objects.get(username=username)


