from .models import Note
from .serializers import NoteSerializer
from rest_framework import generics
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
class NoteListCreate(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


def front(request):
    context = { }
    return render(request, "index.html", context)


@api_view(['GET', 'POST'])
def note(request):

    if request.method == 'GET':
        note = Note.objects.all()
        serializer = NoteSerializer(note, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
