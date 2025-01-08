from django.apps import AppConfig


class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'


# Step 9: Create templates in main/templates/main/
# base.html, home.html, skills.html, projects.html, contact.html

# Step 10: Apply Bootstrap and CSS for modern design.
# Add static files (CSS, JS) in main/static/main/ and link them in base.html.

# Step 11: Test the project locally
# python manage.py makemigrations
# python manage.py migrate
# python manage.py runserver
