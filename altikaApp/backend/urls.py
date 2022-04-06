from django.urls import path
from . import views


urlpatterns = [
    path('', views.front, name='front'),
    path('api/note/', views.NoteListCreate.as_view()),
    path('api/email_call_us/', views.EmailMessageListCreate.as_view()),
    path('notes/', views.note, name='note'),
    path('send/', views.email_call_us, name='email_call_us')
]
