import { Injectable } from '@angular/core';
import { PortfolioItem } from '../models/portfolio-item';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private portfolioItems: PortfolioItem[] = [
    {
      title: 'Personal Website',
      year: '2025',
      summary:
        'Personal website built with Angular to showcase career background and portfolio. The project leverages native framework features and follows a modern, scalable architecture.',
      technologies: ['Angular', 'TypeScript', 'CSS', 'HTML', 'Karma'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et odio sed sapien malesuada tincidunt sed hendrerit urna. Mauris consequat ex et metus sodales pulvinar. Nulla et lobortis diam. Nunc pellentesque massa felis, at rhoncus erat viverra a. Morbi laoreet, elit ac lacinia sollicitudin, sapien libero vestibulum felis, in bibendum nisi nisi vel lacus. Donec vestibulum purus tortor, a pellentesque arcu tristique nec. Maecenas id dui vitae metus molestie tincidunt. Donec cursus neque vel neque euismod ultrices. In blandit ultrices imperdiet. Vivamus tincidunt nisl vel augue ultrices convallis. Nam at odio leo. Nulla ut ultricies lacus, non convallis mi. Quisque sollicitudin augue sapien, eget interdum ante tincidunt ac. Pellentesque pharetra vulputate viverra. Fusce vehicula finibus ipsum et malesuada.',
      features: ['Feature 1', 'Feature 2'],
      imageUrls: [
        '/assets/images/homepage/porfolio-personal-website.png',
        'image2.jpg',
      ],
      links: ['https://github.com/renangirardi/renangirardi.github.io'],
      isFeatured: true,
      route: 'personal-website',
    },
  ];

  getPortfolioItems(): PortfolioItem[] {
    return this.portfolioItems;
  }

  getPortfolioItemByRoute(route: string): PortfolioItem | undefined {
    return this.portfolioItems.find((item) => item.route === route);
  }
}
