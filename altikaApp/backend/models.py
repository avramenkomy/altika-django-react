from django.db import models
from django.utils import timezone
import datetime

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=300)
    content = models.TextField()
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Новости и статьи"
        verbose_name_plural = "Новости и статьи"

    def __str__(self):
        return self.title


class EmailMessage(models.Model):
    subject = models.CharField(max_length=255, blank=False, verbose_name="Тема письма")
    message = models.TextField(verbose_name="Текст сообщения")
    to_send = models.EmailField(verbose_name="Адресат")
    create_date = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    send_date = models.DateTimeField(verbose_name="Дата отправки", default=timezone.now)
    status = models.BooleanField(verbose_name="Статус отправки", default=False)

    # def save(self, *args, **kwargs):
    #     self.send_date = self.send_date_calc()
    #     super(EmailMessage, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Письмо"
        verbose_name_plural = "Письма"

    def __str__(self):
        return self.subject
