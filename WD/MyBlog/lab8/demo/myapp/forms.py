from django import forms
from myapp.models import Review

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['email', 'rating', 'comment']