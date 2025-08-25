import { Injectable } from '@angular/core';

import { ImageGalleryItem } from '../models/image-gallery-item';

@Injectable({
  providedIn: 'root',
})
export class ImageGalleryService {
  imagesUrl =
    'https://gist.githubusercontent.com/renangirardi/740a645a2ca4fad5755d145398abf6bb/raw/20a3aa57c54a157a989f024134d8ed3ce64d807b/images.json';

  async getAboutMeImages(): Promise<ImageGalleryItem[]> {
    const response = await fetch(this.imagesUrl);
    const data = await response.json();
    return data;
  }
}
