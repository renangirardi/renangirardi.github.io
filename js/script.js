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