import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../../shared/components/inner-banner/inner-banner.component';
import { InnerWipContentComponent } from '../../components/inner-wip-content/inner-wip-content.component';

@Component({
  selector: 'app-portfolio',
  imports: [InnerBannerComponent, InnerWipContentComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
