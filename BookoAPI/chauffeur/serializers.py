from rest_framework import serializers
from chauffeur.models import Chauffeur



class ChauffeurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chauffeur
        fields ='__all__' 