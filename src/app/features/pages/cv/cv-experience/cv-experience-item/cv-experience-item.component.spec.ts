import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CvExperienceItemComponent } from './cv-experience-item.component';
import { Experience } from '../../../../../core/models/experience';

describe('CvExperienceItemComponent', () => {
  let component: CvExperienceItemComponent;
  let fixture: ComponentFixture<CvExperienceItemComponent>;

  const mockExperience: Experience = {
    icon: 'dev',
    job: 'Frontend Developer',
    company: 'Tech Corp',
    year: '2022 - Present',
    city: 'São Paulo',
    description: ['Developed Angular apps', 'Implemented unit tests'],
    skills: ['Angular', 'TypeScript', 'Jasmine'],
    logo: 'techcorp.png',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvExperienceItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvExperienceItemComponent);
    component = fixture.componentInstance;
    component.experienceItem = mockExperience; // seta o input
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render job, company, year and city', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector('.cv-experience-item__job')?.textContent,
    ).toContain(mockExperience.job);
    expect(
      compiled.querySelector('.cv-experience-item__company')?.textContent,
    ).toContain(mockExperience.company);
    expect(
      compiled.querySelector('.cv-experience-item__year')?.textContent,
    ).toContain(mockExperience.year);
    expect(
      compiled.querySelector('.cv-experience-item__city')?.textContent,
    ).toContain(mockExperience.city);
  });

  it('should render logo image with correct src and alt', () => {
    const img = fixture.debugElement.query(By.css('img'))
      .nativeElement as HTMLImageElement;
    expect(img.src).toContain(mockExperience.logo);
    expect(img.alt).toBe(`${mockExperience.company} logo`);
  });

  it('should render all skills as app-tag components', () => {
    const tags = fixture.debugElement.queryAll(By.css('app-tag'));
    expect(tags.length).toBe(mockExperience.skills.length);
  });

  it('should render all descriptions as list items', () => {
    const descItems = fixture.debugElement.queryAll(
      By.css('.cv-experience-item__description-item'),
    );
    expect(descItems.length).toBe(mockExperience.description.length);

    mockExperience.description.forEach((desc, index) => {
      expect(descItems[index].nativeElement.textContent).toContain(desc);
    });
  });
});
