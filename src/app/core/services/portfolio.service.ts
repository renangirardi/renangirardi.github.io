import { Injectable } from '@angular/core';

import { PortfolioItem } from '../models/portfolio-item';
import { Gists } from '../utils/gists/gists';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolioUrl = Gists.PORTFOLIO_URL;

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    try {
      const response = await fetch(this.portfolioUrl);
      return response.json();
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      return [];
    }
  }

  async getPortfolioItemByRoute(
    route: string,
  ): Promise<PortfolioItem | undefined> {
    const items = await this.getPortfolioItems();
    return items.find((item) => item.route === route);
  }
}
