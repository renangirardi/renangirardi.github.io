import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { InnerWipContentComponent } from '../../components/inner-wip-content/inner-wip-content.component';

@Component({
  selector: 'app-cv',
  imports: [InnerBannerComponent, InnerWipContentComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
