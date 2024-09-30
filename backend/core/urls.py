from django.contrib import admin
from django.urls import path, include

from users.views import GitHubAuthView, GitHubLoginRedirectView, GitHubCallbackView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/github/', GitHubAuthView.as_view(), name='github-auth'),
    path('auth/github/login/', GitHubLoginRedirectView.as_view(), name='github-login'),
    path('auth/github/callback/', GitHubCallbackView.as_view(), name='github-callback'),
    path('api/', include('users.urls'))
]