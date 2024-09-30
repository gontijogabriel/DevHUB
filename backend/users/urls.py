from django.urls import path

from users.views import UserProfileSerializer

urlpatterns = [
    path('users/<str:username>/', UserProfileSerializer.as_view(), name='retrieve-user'),
]
