from django.contrib import admin
from .models import User

# Register your models here.
class RegisterAdmin(admin.ModelAdmin):
    list = ('UserName','Password','signup')


    admin.site.register(User)
