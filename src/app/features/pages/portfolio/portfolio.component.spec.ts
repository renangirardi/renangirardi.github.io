import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { PortfolioItem } from '../../../core/models/portfolio-item';
import { NextPageComponent } from '../../components/next-page/next-page.component';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';

const mockPortfolioItems: PortfolioItem[] = [
  {
    title: 'Project One',
    summary: 'Summary One',
    route: 'project-one',
    technologies: ['Angular', 'TypeScript'],
    imageUrls: ['image1.jpg'],
    year: '2023',
    description: 'Description 1',
    features: ['Feature 1'],
    links: ['Link 1'],
    isFeatured: true,
  },
  {
    title: 'Project 2',
    summary: 'Summary 2',
    technologies: ['React', 'JavaScript'],
    route: 'project-2',
    imageUrls: ['img2.jpg'],
    year: '2022',
    description: 'Description 2',
    features: ['Feature 2'],
    links: ['Link 2'],
    isFeatured: false,
  },
];

class MockPortfolioService {
  getPortfolioItems = jasmine
    .createSpy('getPortfolioItems')
    .and.returnValue(Promise.resolve(mockPortfolioItems));
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let portfolioService: MockPortfolioService;
  let router: MockRouter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [
        { provide: PortfolioService, useClass: MockPortfolioService },
        { provide: Router, useClass: MockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    portfolioService = TestBed.inject(
      PortfolioService,
    ) as unknown as MockPortfolioService;
    router = TestBed.inject(Router) as unknown as MockRouter;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call portfolioService.getPortfolioItems on init', fakeAsync(() => {
    fixture.detectChanges();
    tick(); // resolve promises
    expect(portfolioService.getPortfolioItems).toHaveBeenCalled();
    expect(component.portfolioItems.length).toBe(2);
  }));

  it('should render InnerBannerComponent with title "Portfolio"', () => {
    fixture.detectChanges();
    const banner = fixture.debugElement.query(
      By.directive(InnerBannerComponent),
    );
    expect(banner).toBeTruthy();
    expect(banner.attributes['ng-reflect-title']).toBe('Portfolio');
  });

  it('should navigate to portfolio item when clicked', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const firstItem = fixture.debugElement.query(
      By.css('.portfolio-item__container'),
    );
    firstItem.triggerEventHandler('click');
    expect(router.navigate).toHaveBeenCalledWith([
      'portfolio/portfolio-item',
      'project-one',
    ]);
  }));

  it('should set hoveredItem on mouseenter and clear on mouseleave', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const firstItem = component.portfolioItems[0];
    const firstContainer = fixture.debugElement.query(
      By.css('.portfolio-item__container'),
    );

    firstContainer.triggerEventHandler('mouseenter');
    expect(component.hoveredItem).toBe(firstItem);

    firstContainer.triggerEventHandler('mouseleave');
    expect(component.hoveredItem).toBeUndefined();
  }));

  it('should set isMobile to true when window width <= 950', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(800);
    component['checkViewport']();
    expect(component.isMobile).toBeTrue();
  });

  it('should render NextPageComponent with correct inputs', () => {
    fixture.detectChanges();
    const nextPageDebug = fixture.debugElement.query(
      By.directive(NextPageComponent),
    );
    const nextPageInstance =
      nextPageDebug.componentInstance as NextPageComponent;

    expect(nextPageInstance.nextPage).toBe('contact');
    expect(nextPageInstance.text).toBe(
      "Would you like to get in touch now that you've explored my portfolio?",
    );
    expect(nextPageInstance.btnText).toBe('Contact');
  });
});
