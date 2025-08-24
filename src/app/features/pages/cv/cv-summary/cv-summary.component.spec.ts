import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CvSummaryComponent } from './cv-summary.component';

describe('CvSummaryComponent', () => {
  let component: CvSummaryComponent;
  let fixture: ComponentFixture<CvSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title "Summary"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.cv-summary-container__title')?.textContent,
    ).toContain('Summary');
  });

  it('should render "Career Objectives" and "Professional Summary"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.cv-summary-container__intro')?.textContent,
    ).toContain('Career Objectives');
    expect(
      compiled.querySelector('.cv-summary-container__intro')?.textContent,
    ).toContain('Professional Summary');
  });

  it('should render the "Core Competencies" section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.cv-summary-container__skills h3')?.textContent,
    ).toContain('Core Competencies');
  });

  it('should render multiple SkillBarComponent instances', () => {
    const skillBars = fixture.debugElement.queryAll(By.css('app-skill-bar'));
    expect(skillBars.length).toBeGreaterThan(0);
  });

  it('should render Technical Skills, Soft Skills and Languages sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.cv-summary-container__skills-list')?.textContent,
    ).toContain('Technical Skills');
    expect(
      compiled.querySelector('.cv-summary-container__skills-list')?.textContent,
    ).toContain('Soft Skills');
    expect(
      compiled.querySelector('.cv-summary-container__skills-list')?.textContent,
    ).toContain('Languages');
  });
});
