import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { PortfolioService } from '../../../core/services/portfolio.service';

import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { NextPageComponent } from '../../components/next-page/next-page.component';
import { PortfolioItem } from '../../../core/models/portfolio-item';
import { TagComponent } from '../../../shared/components/tag/tag.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    InnerBannerComponent,
    NextPageComponent,
    CommonModule,
    TagComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  portfolioItems!: PortfolioItem[];
  hoveredItem?: PortfolioItem;
  isMobile = false;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.portfolioItems = this.portfolioService.getPortfolioItems();
    this.checkViewport();
  }

  navigateToPortfolioItem(item: PortfolioItem) {
    this.router.navigate(['portfolio/portfolio-item', item.route]);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobile = window.innerWidth <= 950;
  }

  revealContent(item: PortfolioItem) {
    this.hoveredItem = item;
  }

  hideContent() {
    this.hoveredItem = undefined;
  }
}
