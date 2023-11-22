from django.contrib import admin
from .models import FeedBack

# Register your models here.
#admin.site.register(FeedBack)
@admin.register(FeedBack)
class FeedBackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email')