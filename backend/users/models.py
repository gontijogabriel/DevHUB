from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

from core.models import BaseModel


class Stack(BaseModel):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Stack"
        verbose_name_plural = "Stacks"

    def __str__(self):
        return self.name


class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None, **extra_fields):
        if not username:
            raise ValueError('O nome de usuário é obrigatório')

        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(username, email, password, **extra_fields)


class User(BaseModel, AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    avatar_url = models.URLField(blank=True, null=True)
    bio = models.TextField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    skills = models.ManyToManyField('projects.Skills')
    stack = models.ForeignKey(Stack, on_delete=models.CASCADE, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)  

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username


class Experience(models.Model):
    start_at = models.DateField()
    end_at = models.DateField(null=True, blank=True)
    company = models.CharField(max_length=255)
    stack = models.CharField(max_length=255)
    description = models.TextField()
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='experience')

    class Meta:
        verbose_name = "Experience"
        verbose_name_plural = "Experience"

    def __str__(self):
        return self.company
