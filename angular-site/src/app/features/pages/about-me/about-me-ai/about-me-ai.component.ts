import { Component } from '@angular/core';

import { FadeInDirective } from '../../../../core/directives/fade-in.directive';

import { ImageGalleryComponent } from '../../../../shared/components/image-gallery/image-gallery.component';

@Component({
  selector: 'app-about-me-ai',
  imports: [ImageGalleryComponent, FadeInDirective],
  templateUrl: './about-me-ai.component.html',
  styleUrl: './about-me-ai.component.css'
})
export class AboutMeAiComponent {

}
