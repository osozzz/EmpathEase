from django.db import models

# Create your models here.
class FeedBack(models.Model):
    name=models.CharField(max_length=50)
    email=models.EmailField()
    Feedback=models.TextField()
    
    #def __str__(self) -> str:
        #return super().__str__()
    