from django.contrib.auth import get_user_model

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token

from social_django.utils import load_strategy, load_backend
from social_core.exceptions import MissingBackend, AuthTokenError, AuthForbidden

from users.serializers import RegisterSerializer


User = get_user_model()


class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def github_login(request):
    backend = request.data.get('backend')
    token = request.data.get('access_token')

    try:
        strategy = load_strategy(request)
        backend = load_backend(strategy=strategy, name=backend, redirect_uri=None)
        user = backend.do_auth(token)

        if user and user.is_active:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Authentication failed'}, status=400)

    except (MissingBackend, AuthTokenError, AuthForbidden) as e:
        return Response({'error': str(e)}, status=400)