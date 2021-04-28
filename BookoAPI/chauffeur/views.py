from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from chauffeur.models import Voiture, Chauffeur
from chauffeur.serializers import ChauffeurSerializer

@csrf_exempt
def chauffeur_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        chauffeurs = Chauffeur.objects.all()
        serializer = ChauffeurSerializer(chauffeurs, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ChauffeurSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def chauffeur_detail(request, pk):
    try:
        chauffeur = Chauffeur.objects.get(pk=pk)
    except Chauffeur.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ChauffeurSerializer(chauffeur)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ChauffeurSerializer(chauffeur, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        chauffeur.delete()
        return HttpResponse(status=204)