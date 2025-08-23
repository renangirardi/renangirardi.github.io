import { Component } from '@angular/core';
import { HomepageBannerComponent } from './homepage-banner/homepage-banner.component';
import { HomepageAboutComponent } from './homepage-about/homepage-about.component';
import { HomepageAiComponent } from './homepage-ai/homepage-ai.component';
import { HomepageCvComponent } from './homepage-cv/homepage-cv.component';
import { HomepagePortfolioComponent } from './homepage-portfolio/homepage-portfolio.component';

@Component({
  selector: 'app-homepage',
  imports: [
    HomepageBannerComponent,
    HomepageAboutComponent,
    HomepageAiComponent,
    HomepageCvComponent,
    HomepagePortfolioComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
