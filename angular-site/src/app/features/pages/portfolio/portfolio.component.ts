import { Component } from '@angular/core';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { InnerWipContentComponent } from '../../components/inner-wip-content/inner-wip-content.component';
import { NextPageComponent } from '../../components/next-page/next-page.component';

@Component({
  selector: 'app-portfolio',
  imports: [InnerBannerComponent, InnerWipContentComponent, NextPageComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
