import { Injectable } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolioUrl =
    'https://gist.githubusercontent.com/renangirardi/22a1204e5942b07e74d82ffe187211ef/raw/414169c6562bc809519d00795d74288a77084846/portfolio.json';

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
