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
  




/*
const slides = Array.from(document.querySelectorAll('.slide'));
let element = slides[3];
let count = 0;

setInterval( () => {

    console.log('----------------------ITERATION----------------------')

    console.log(slides);

    slides[slides.length-1].style.top = '400px';
    slides[slides.length-1].style.zIndex = '0';
    if (count !== 0) {
        slides.push(element);
    }
    
    slides[0].style.zIndex = '1';
    slides[0].style.top = '0px';
    element = slides.shift();

    console.log(slides);

    count++;
}, 1000);
*/