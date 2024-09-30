from rest_framework import serializers

from users.models import User, Experience, Stack

from projects.serializers import ProjectSerializer


class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stack
        fields = ['name']


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ['start_at', 'end_at', 'company', 'stack', 'description']


class UserProfileSerializer(serializers.ModelSerializer):
    experience = ExperienceSerializer(many=True, read_only=True)
    projects = ProjectSerializer(many=True, read_only=True)
    stack = StackSerializer(read_only=True)

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True},
        }