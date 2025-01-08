from django.shortcuts import render
from .models import Profile, Skill, Project

def home(request):
    profile = Profile.objects.first()
    return render(request, 'main/home.html', {'profile': profile})

def skills(request):
    skills = Skill.objects.all()
    return render(request, 'main/skills.html', {'skills': skills})

def projects(request):
    projects = Project.objects.all()
    return render(request, 'main/projects.html', {'projects': projects})

def contact(request):
    return render(request, 'main/contact.html')
