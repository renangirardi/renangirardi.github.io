import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CvComponent } from './cv.component';
import { NextPageComponent } from '../../components/next-page/next-page.component';

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render InnerBannerComponent with title "Curriculum vitæ"', () => {
    const innerBanner = fixture.debugElement.query(By.css('app-inner-banner'));
    expect(innerBanner).toBeTruthy();
    expect(innerBanner.attributes['ng-reflect-title']).toBe('Curriculum vitæ');
  });

  it('should render CvSummaryComponent', () => {
    const summary = fixture.debugElement.query(By.css('app-cv-summary'));
    expect(summary).toBeTruthy();
  });

  it('should render CvExperienceComponent', () => {
    const experience = fixture.debugElement.query(By.css('app-cv-experience'));
    expect(experience).toBeTruthy();
  });

  it('should render CvEducationComponent', () => {
    const education = fixture.debugElement.query(By.css('app-cv-education'));
    expect(education).toBeTruthy();
  });

  it('should render NextPageComponent with correct inputs', () => {
    const nextPageDebug = fixture.debugElement.query(
      By.directive(NextPageComponent),
    );
    const nextPageInstance =
      nextPageDebug.componentInstance as NextPageComponent;

    expect(nextPageInstance.nextPage).toBe('portfolio');
    expect(nextPageInstance.text).toBe(
      'Now that you know my background, would you like to see my portfolio?',
    );
    expect(nextPageInstance.btnText).toBe('Portfolio');
  });
});
