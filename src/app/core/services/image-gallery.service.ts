import { Injectable } from '@angular/core';

import { ImageGalleryItem } from '../models/image-gallery-item';
import { Gists } from '../utils/gists/gists';

@Injectable({
  providedIn: 'root',
})
export class ImageGalleryService {
  imagesUrl = Gists.IMAGES_URL;

  async getAboutMeImages(): Promise<ImageGalleryItem[]> {
    const response = await fetch(this.imagesUrl);
    const data = await response.json();
    return data;
  }
}
