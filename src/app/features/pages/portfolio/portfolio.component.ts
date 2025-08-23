import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioService } from '../../../core/services/portfolio.service';

import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { NextPageComponent } from '../../components/next-page/next-page.component';
import { PortfolioItem } from '../../../core/models/portfolio-item';
import { TagComponent } from '../../../shared/components/tag/tag.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [
    InnerBannerComponent,
    NextPageComponent,
    CommonModule,
    TagComponent,
    ButtonComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  portfolioItems!: PortfolioItem[];

  constructor(
    private portfolioService: PortfolioService,
    private router: Router,
  ) {
    this.portfolioItems = this.portfolioService.getPortfolioItems();
  }

  navigateToPortfolioItem(item: PortfolioItem) {
    this.router.navigate(['portfolio/portfolio-item', item.route]);
  }
}
