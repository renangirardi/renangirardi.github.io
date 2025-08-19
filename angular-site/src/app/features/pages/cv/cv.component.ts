import { Component } from '@angular/core';

import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { CvEducationComponent } from './cv-education/cv-education.component';
import { CvExperienceComponent } from './cv-experience/cv-experience.component';
import { CvSummaryComponent } from './cv-summary/cv-summary.component';
import { NextPageComponent } from '../../components/next-page/next-page.component';

@Component({
  selector: 'app-cv',
  imports: [
    InnerBannerComponent,
    CvEducationComponent,
    CvExperienceComponent,
    CvSummaryComponent,
    NextPageComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
