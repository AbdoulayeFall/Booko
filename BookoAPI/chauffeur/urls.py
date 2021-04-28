from django.contrib import admin
from django.urls import path

from chauffeur import views

urlpatterns = [
    path('', views.chauffeur_list),
    path('<uuid:pk>/', views.chauffeur_detail),
]