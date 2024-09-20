

def save_profile_picture(backend, user, response, *args, **kwargs):
    if backend.name == 'github':
        profile_image = response.get('avatar_url')
        if profile_image:
            user.profile_image = profile_image
            user.save()
