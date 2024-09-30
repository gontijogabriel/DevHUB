from django.contrib import admin
from projects.models import Skills, Project

@admin.register(Skills)
class LanguageAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'user', 'link')
    search_fields = ('name', 'user__username')
    list_filter = ('skills', 'user')
    filter_horizontal = ('skills',)
    autocomplete_fields = ['user']
