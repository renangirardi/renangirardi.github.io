import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { InnerWipContentComponent } from '../../components/inner-wip-content/inner-wip-content.component';

@Component({
  selector: 'app-about-me',
  imports: [InnerBannerComponent, InnerWipContentComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
