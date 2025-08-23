import { Component } from '@angular/core';

import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { AboutMeContentComponent } from './about-me-content/about-me-content.component';
import { AboutMeAiComponent } from './about-me-ai/about-me-ai.component';
import { NextPageComponent } from '../../components/next-page/next-page.component';

@Component({
  selector: 'app-about-me',
  imports: [
    InnerBannerComponent,
    AboutMeContentComponent,
    AboutMeAiComponent,
    NextPageComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
