from django.shortcuts import render, redirect, get_object_or_404
from .models import Post, Review
from .forms import ReviewForm

def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
    if form.is_valid():
        form.save()
        return redirect('home')
    else:
        form = ReviewForm()
        return render(request, 'html/submit_review.html', {'form': form})

def home(request):
    posts = Post.objects.all()
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'html/index.html', {'posts': posts, 'reviews': reviews})

def about(request):
    return render(request, './html/about.html')

def form(request):
    return render(request, './html/form.html')

def gallery(request):
    return render(request, './html/gallery.html')

def chatbot(request):
    return render(request, './html/chatbot.html')

def base(request):
    return render(request, './html/base.html')

def todos(request):
    return render(request, './html/todos.html')

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, './html/post_detail.html', {'post': post})

def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm()
    
    return render(request, 'html/submit_review.html', {'form': form})



