from django.db import models

import uuid

class Voiture(models.Model):
    idVoiture = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    modelVoiture = models.CharField(max_length = 20)
    matricule = models.CharField(max_length = 10)

class Chauffeur(models.Model):
    idChauffeur = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prenom = models.CharField(max_length = 20)
    nom = models.CharField(max_length = 20)
    depart = models.CharField(max_length = 20)
    arrivee = models.CharField(max_length = 20)
    voiture = models.OneToOneField(Voiture, on_delete=models.CASCADE)
    heureDeDepart = models.DateTimeField()
    
