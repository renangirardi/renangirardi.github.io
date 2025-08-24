import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutMeContentComponent } from './about-me-content.component';
import { FadeInDirective } from '../../../../core/directives/fade-in.directive';

describe('AboutMeContentComponent', () => {
  let component: AboutMeContentComponent;
  let fixture: ComponentFixture<AboutMeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeContentComponent, FadeInDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize ages correctly in the constructor', () => {
    const testComponent = new AboutMeContentComponent();

    expect(testComponent.myAge).toBeDefined();
    expect(testComponent.marriageAge).toBeDefined();
    expect(testComponent.sonAge).toBeDefined();

    expect(Number(testComponent.myAge)).toEqual(jasmine.any(Number));
    expect(Number(testComponent.marriageAge)).toEqual(jasmine.any(Number));
    expect(Number(testComponent.sonAge)).toEqual(jasmine.any(Number));
  });

  it('should render interpolated values in the template', () => {
    const textContent = fixture.nativeElement.textContent;
    expect(textContent).toContain(component.myAge);
    expect(textContent).toContain(component.marriageAge);
    expect(textContent).toContain(component.sonAge);
  });

  it('should have at least 3 sections with fade-in directive', () => {
    const sections = fixture.debugElement.queryAll(
      By.directive(FadeInDirective),
    );
    expect(sections.length).toBeGreaterThanOrEqual(3);
  });

  it('should render images with correct src paths', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length).toBe(3);

    const srcs = images.map((img) => img.nativeElement.getAttribute('src'));
    expect(srcs).toContain('assets\\images\\about-me\\about-me-1.png');
    expect(srcs).toContain('assets\\images\\about-me\\about-me-2.png');
    expect(srcs).toContain('assets\\images\\about-me\\about-me-3.png');
  });
});
