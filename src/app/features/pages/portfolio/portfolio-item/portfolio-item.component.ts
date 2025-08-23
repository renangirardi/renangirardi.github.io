import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PortfolioItem } from '../../../../core/models/portfolio-item';
import { PortfolioService } from '../../../../core/services/portfolio.service';
import { InnerWipContentComponent } from '../../../components/inner-wip-content/inner-wip-content.component';

@Component({
  selector: 'app-portfolio-item',
  imports: [InnerWipContentComponent, InnerWipContentComponent],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.css',
})
export class PortfolioItemComponent implements OnInit {
  item?: PortfolioItem;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap.get('route');
    if (routeParam) {
      this.item = this.portfolioService.getPortfolioItemByRoute(routeParam);
    }
  }
}
