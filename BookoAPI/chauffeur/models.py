from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

import uuid


class Chauffeur(models.Model):
    idChauffeur = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prenom = models.CharField(max_length = 20)
    nom = models.CharField(max_length = 20)
    depart = models.CharField(max_length = 20)
    arrivee = models.CharField(max_length = 20)
    telephone =  PhoneNumberField(null=False, blank=False, unique=True)
    heureDeDepart = models.DateTimeField()
    
