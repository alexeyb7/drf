from django.db import models
from uuid import uuid4


class Users(models.Model):
    id = models.UUIDField(default=uuid4)
    email = models.CharField(max_length=64, primary_key=True)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    username = models.CharField(max_length=64)
