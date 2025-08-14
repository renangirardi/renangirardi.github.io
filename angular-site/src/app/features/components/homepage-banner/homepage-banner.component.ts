import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage-banner',
  imports: [RouterModule],
  templateUrl: './homepage-banner.component.html',
  styleUrl: './homepage-banner.component.css'
})
export class HomepageBannerComponent implements OnInit {
  slides!: NodeListOf<Element>;

  ngOnInit() {
    this.slides = document.querySelectorAll('.slide');
    this.startSlider();
  }

  startSlider() {
    let currentSlide = 0;

    this.slides[currentSlide].classList.add('slide-visible');
    (this.slides[currentSlide] as HTMLElement).style.removeProperty('top');

    setInterval(() => {
      this.slides[currentSlide].classList.remove('slide-visible');
      this.slides[currentSlide].classList.add('slide-previous');

      currentSlide = (currentSlide + 1) % this.slides.length;

      this.slides[currentSlide].classList.add('slide-visible');

      setTimeout(() => {
        this.slides.forEach((slide, index) => {
          if (index !== currentSlide && index !== (currentSlide - 1 + this.slides.length) % this.slides.length) {
            slide.classList.remove('slide-previous');
          }
        });
      }, 2000);
    }, 4000);
  }
}
