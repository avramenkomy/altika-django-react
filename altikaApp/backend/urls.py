from django.urls import path
from . import views


urlpatterns = [
    path('', views.front, name='front'),
    path('api/note/', views.NoteListCreate.as_view()),
    path('notes/', views.note, name='note'),
]
