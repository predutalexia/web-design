from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('form/', views.form, name='form'),
    path('gallery/', views.gallery, name='gallery'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('todos/', views.todos, name='todos'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
    path('submit-review/', views.submit_review, name='submit_review'), 
]
