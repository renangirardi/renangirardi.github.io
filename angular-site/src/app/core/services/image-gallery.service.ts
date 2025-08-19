import { Injectable } from '@angular/core';

import { ImageGalleryItem } from '../models/image-gallery-item';

@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {
  private aboutMeImages1: ImageGalleryItem[] = [
    {
      src: 'assets/images/about-me/ai.cthulhu__01.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__02.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__03.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__04.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__05.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__06.jpg',
      alt: 'AI Cthulhu',
    }
  ];

  private aboutMeImages2: ImageGalleryItem[] = [

    {
      src: 'assets/images/about-me/ai.cthulhu__07.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__08.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__09.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__10.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__11.jpg',
      alt: 'AI Cthulhu',
    },
    {
      src: 'assets/images/about-me/ai.cthulhu__12.jpg',
      alt: 'AI Cthulhu',
    }
  ];

  getAboutMeImages1(): ImageGalleryItem[] {
    return this.aboutMeImages1;
  }

  getAboutMeImages2(): ImageGalleryItem[] {
    return this.aboutMeImages2;
  }
}
