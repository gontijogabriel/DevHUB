from rest_framework import serializers

from projects.models import Project, Skills


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ['name']


class ProjectSerializer(serializers.ModelSerializer):
    skills = SkillsSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'