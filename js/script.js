document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    slides[currentSlide].classList.add('slide-visible');
    slides[currentSlide].attributeStyleMap.delete('top');
  
    setInterval(function() {
      slides[currentSlide].classList.remove('slide-visible');
      slides[currentSlide].classList.add('slide-previous');
  
      currentSlide = (currentSlide + 1) % slides.length;
  
      slides[currentSlide].classList.add('slide-visible');
  
      setTimeout(() => {
        slides.forEach((slide, index) => {
          if (index !== currentSlide && index !== (currentSlide - 1 + slides.length) % slides.length) {
            slide.classList.remove('slide-previous');
          }
        });
      }, 2000);
    }, 4000);
  });

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu').style.transform = 'translateY(0)';
    document.querySelector('.overlay').style.display = 'block';
  });

document.getElementById('close-menu').addEventListener('click', function() {
    document.querySelector('.mobile-menu').style.transform = 'translateY(-100%)';
    document.querySelector('.overlay').style.display = 'none';
  });

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('.mobile-menu').style.transform = 'translateY(-100%)';
    this.style.display = 'none';
  });

document.addEventListener("DOMContentLoaded", function() {
  const targets = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('element'); 
      }
    });
  }, {
    threshold: 0.3
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});
