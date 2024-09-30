from django.contrib import admin

from users.models import Experience, User


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company', 'start_at', 'end_at', 'stack')
    search_fields = ('company', 'stack')
    list_filter = ('start_at', 'end_at')



@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    list_filter = ('is_active', 'is_staff')
    filter_horizontal = ('skills',)
    ordering = ('username',)
    autocomplete_fields = ['skills']
