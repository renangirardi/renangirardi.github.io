import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CvExperienceComponent } from './cv-experience.component';
import { ExperienceService } from '../../../../core/services/experience.service';
import { Experience } from '../../../../core/models/experience';

describe('CvExperienceComponent', () => {
  let component: CvExperienceComponent;
  let fixture: ComponentFixture<CvExperienceComponent>;
  let mockExperienceService: jasmine.SpyObj<ExperienceService>;

  const mockExperiences: Experience[] = [
    {
      icon: 'dev',
      job: 'Frontend Developer',
      company: 'Tech Corp',
      year: '2022 - Present',
      city: 'São Paulo',
      description: ['Developed Angular apps', 'Implemented unit tests'],
      skills: ['Angular', 'TypeScript', 'Jasmine'],
      logo: 'techcorp.png',
    },
    {
      icon: 'devops',
      job: 'DevOps Engineer',
      company: 'Cloud Inc',
      year: '2020 - 2022',
      city: 'Rio de Janeiro',
      description: ['Maintained CI/CD pipelines'],
      skills: ['AWS', 'Docker', 'Kubernetes'],
      logo: 'cloudinc.png',
    },
  ];

  beforeEach(async () => {
    mockExperienceService = jasmine.createSpyObj('ExperienceService', [
      'getExperienceItems',
    ]);
    mockExperienceService.getExperienceItems.and.returnValue(mockExperiences);

    await TestBed.configureTestingModule({
      imports: [CvExperienceComponent],
      providers: [
        { provide: ExperienceService, useValue: mockExperienceService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CvExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title "Experience"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.cv-experience-container__title')?.textContent,
    ).toContain('Experience');
  });

  it('should call ExperienceService to get experience items', () => {
    expect(mockExperienceService.getExperienceItems).toHaveBeenCalled();
    expect(component.experienceItems.length).toBe(2);
  });

  it('should render one CvExperienceItemComponent per experience', () => {
    const items = fixture.debugElement.queryAll(
      By.css('app-cv-experience-item'),
    );
    expect(items.length).toBe(mockExperiences.length);
  });
});
