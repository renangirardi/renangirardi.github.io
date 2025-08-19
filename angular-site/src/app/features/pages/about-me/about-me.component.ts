import { Component } from '@angular/core';

import { InnerBannerComponent } from '../../../shared/components/inner-banner/inner-banner.component';
import { AboutMeContentComponent } from './about-me-content/about-me-content.component';
import { AboutMeAiComponent } from './about-me-ai/about-me-ai.component';

@Component({
  selector: 'app-about-me',
  imports: [InnerBannerComponent, AboutMeContentComponent, AboutMeAiComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
