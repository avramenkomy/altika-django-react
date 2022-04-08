from rest_framework import serializers
from .models import Note, EmailMessage


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'content', 'author', 'created_at')


class EmailMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailMessage
        fields = ('id', 'subject', 'message', 'to_send', 'create_date', 'send_date', 'status')
