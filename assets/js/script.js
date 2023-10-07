document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.slide');
  var prevButton = document.querySelector('.prev');
  var nextButton = document.querySelector('.next');
  var dots = document.querySelectorAll('.dot');
  var currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      showSlide(index);
    });
  });

  showSlide(currentSlide);
});
