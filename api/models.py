from django.db import models

# Create your models here.

class User(models.Model):
    UserName = models.CharField(max_length=250)
    #EmailAddress = models.EmailField(max_length=225, unique= True)
    Password = models.CharField(max_length=100)
    signup = models.BooleanField(default=False)


    def _str_(self):
        return self.EmailAddress
