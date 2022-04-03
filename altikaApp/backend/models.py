from django.db import models

# Create your models here.
class Note(models.Model):
    title = models.CharField(max_length=300)
    content = models.TextField()
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
