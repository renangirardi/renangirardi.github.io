import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-image-slider',
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent implements AfterViewInit {
  @Input() imagesSrc!: string[];
  @ViewChildren('image') images!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('dot') dots!: QueryList<ElementRef<HTMLElement>>;
  slideIndex = 1;

  ngAfterViewInit() {
    this.showImage(this.slideIndex);
  }

  nextImage(index: number) {
    this.showImage((this.slideIndex += index));
  }

  chooseImage(index: number) {
    this.showImage((this.slideIndex = index));
  }

  showImage(index: number) {
    const imagesArray = this.images.toArray();
    const dotsArray = this.dots.toArray();

    if (imagesArray.length === 0 || dotsArray.length === 0) {
      return;
    }

    if (index > imagesArray.length) {
      this.slideIndex = 1;
    }
    if (index < 1) {
      this.slideIndex = imagesArray.length;
    }

    imagesArray.forEach((img) => (img.nativeElement.style.display = 'none'));

    dotsArray.forEach((dot) => {
      dot.nativeElement.className = dot.nativeElement.className.replace(
        ' image-slider__dot--active',
        '',
      );
    });

    imagesArray[this.slideIndex - 1].nativeElement.style.display = 'block';
    dotsArray[this.slideIndex - 1].nativeElement.className +=
      ' image-slider__dot--active';
  }
}
