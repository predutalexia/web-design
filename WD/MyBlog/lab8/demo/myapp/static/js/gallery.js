let currentIndex = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slides img');

    if (n >= slides.length) 
    {
        currentIndex = 0;
    } 
    else if (n < 0) 
    {
        currentIndex = slides.length - 1; 
    } 
    else 
    {
        currentIndex = n;
    }

    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.computedStyleMap.opacity = 0;
        slide.computedStyleMap.visibility = 'hidden';
    });

    slides[currentIndex].classList.add('active');
    slide.computedStyleMap.opacity = 1;
    slide.computedStyleMap.visibility = 'visible';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener("DOMContentLoaded", () => showSlide(currentIndex));
