from django.db import models

from core.models import BaseModel


class Skills(BaseModel):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __str__(self):
        return self.name


class Project(BaseModel):
    name = models.CharField(max_length=255)
    descr = models.TextField()
    skills = models.ManyToManyField('projects.Skills', related_name='skills')
    link = models.URLField(max_length=500, null=True, blank=True)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='projects')

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.name
