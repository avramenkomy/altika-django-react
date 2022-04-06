from .models import Note, EmailMessage
from .serializers import NoteSerializer, EmailMessageSerializer
from rest_framework import generics
from django.shortcuts import render
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from altikaApp.settings import EMAIL_HOST_USER


# Create your views here.
class NoteListCreate(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class EmailMessageListCreate(generics.ListCreateAPIView):
    queryset = EmailMessage.objects.all()
    serializer_class = EmailMessageSerializer


def front(request):
    context = { }
    return render(request, "index.html", context)


def sender(subject, message, from_mail, to_mails_list):
    mail = send_mail(subject, message, from_mail, to_mails_list, fail_silently=False)
    return mail


@api_view(['POST'])
def email_call_us(request):
    if request.method == 'POST':
        subject = 'Перезвонить клиенту'
        message = f'''Перезвонить клиенту!!!
            Имя: {request.data['userName']}
            email: {request.data['email']}
            Тел.№{request.data['phone']}'''
        from_mail = EMAIL_HOST_USER
        to_mails_list = ['test_for_skillfactory@mail.ru']
        send_status = sender(subject, message, from_mail, to_mails_list)
        if send_status == 1:
            new_msg = {
                'subject': subject,
                'message': message,
                'to_send': to_mails_list[0],
                'status': True
            }
            serializer = EmailMessageSerializer(data=new_msg)
            if serializer.is_valid():
                serializer.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


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
