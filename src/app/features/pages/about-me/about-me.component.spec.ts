import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me.component';
import { InnerBannerComponent } from '../../components/inner-banner/inner-banner.component';
import { AboutMeContentComponent } from './about-me-content/about-me-content.component';
import { AboutMeAiComponent } from './about-me-ai/about-me-ai.component';
import { NextPageComponent } from '../../components/next-page/next-page.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutMeComponent,
        RouterModule.forRoot([]),
        InnerBannerComponent,
        AboutMeContentComponent,
        AboutMeAiComponent,
        NextPageComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render InnerBannerComponent with title "About me"', () => {
    const innerBanner = fixture.debugElement.query(
      By.directive(InnerBannerComponent),
    );
    expect(innerBanner).toBeTruthy();
    expect(innerBanner.componentInstance.title).toBe('About me');
  });

  it('should render AboutMeContentComponent', () => {
    const aboutMeContent = fixture.debugElement.query(
      By.directive(AboutMeContentComponent),
    );
    expect(aboutMeContent).toBeTruthy();
  });

  it('should render AboutMeAiComponent', () => {
    const aboutMeAi = fixture.debugElement.query(
      By.directive(AboutMeAiComponent),
    );
    expect(aboutMeAi).toBeTruthy();
  });

  it('should render NextPageComponent with correct inputs', () => {
    const nextPage = fixture.debugElement.query(
      By.directive(NextPageComponent),
    );
    expect(nextPage).toBeTruthy();

    const instance = nextPage.componentInstance as NextPageComponent;
    expect(instance.nextPage).toBe('cv');
    expect(instance.text).toBe(
      'Now that you know me better, would you like to take a look at my resume?',
    );
    expect(instance.btnText).toBe('Curriculum vitæ');
  });
});
