from .models import Note
from .serializers import NoteSerializer
from rest_framework import generics


# Create your views here.
class NoteListCreate(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
