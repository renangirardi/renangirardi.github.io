import { Component } from '@angular/core';
import { HomepageBannerComponent } from '../../components/homepage-banner/homepage-banner.component';
import { HomepageAboutComponent } from '../../components/homepage-about/homepage-about.component';
import { HomepageAiComponent } from '../../components/homepage-ai/homepage-ai.component';
import { HomepageCvComponent } from '../../components/homepage-cv/homepage-cv.component';
import { HomepagePortfolioComponent } from '../../components/homepage-portfolio/homepage-portfolio.component';

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
