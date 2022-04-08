from django.contrib import admin
from backend.models import Note, EmailMessage


# Register your models here.
@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    pass


@admin.register(EmailMessage)
class EmailMessageAdmin(admin.ModelAdmin):
    pass
