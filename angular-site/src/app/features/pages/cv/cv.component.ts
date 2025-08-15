import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { CvEducationComponent } from '../../components/cv-education/cv-education.component';

@Component({
  selector: 'app-cv',
  imports: [InnerBannerComponent, CvEducationComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
