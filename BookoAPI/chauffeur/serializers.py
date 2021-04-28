from rest_framework import serializers
from chauffeur.models import Voiture, Chauffeur


class VoitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voiture
        fields:['modelVoiture', 'matricule']


class ChauffeurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chauffeur
        fields ='__all__' 