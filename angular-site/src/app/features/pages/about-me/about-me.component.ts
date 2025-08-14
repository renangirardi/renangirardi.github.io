import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { AboutEducationComponent } from '../../components/about-education/about-education.component';

@Component({
  selector: 'app-about-me',
  imports: [InnerBannerComponent, AboutEducationComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
