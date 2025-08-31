import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PortfolioItem } from '../../../../core/models/portfolio-item';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { InnerBannerComponent } from '../../../components/inner-banner/inner-banner.component';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../../../../shared/components/tag/tag.component';
import { ImageSliderComponent } from '../../../../shared/components/image-slider/image-slider.component';

@Component({
  selector: 'app-portfolio-item',
  imports: [
    InnerBannerComponent,
    CommonModule,
    TagComponent,
    ImageSliderComponent,
    ImageSliderComponent,
  ],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css',
})
export class PortfolioItemComponent implements OnInit {
  item: PortfolioItem = {
    title: '',
    year: '',
    summary: '',
    route: '',
    description: '',
    imageUrls: [],
    features: [],
    technologies: [],
    links: [],
  };

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap.get('route');
    if (routeParam) {
      this.portfolioService.getPortfolioItemByRoute(routeParam).then((item) => {
        this.item = item!;
      });
    }
  }
}
