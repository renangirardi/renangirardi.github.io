import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CvEducationComponent } from './cv-education.component';
import { EducationService } from '../../../../core/services/education.service';
import { Education } from '../../../../core/models/education';
import { Certificate } from '../../../../core/models/certificate';

// mock data
const mockEducationItems: Education[] = [
  {
    icon: 'school',
    course: 'CS',
    university: 'Uni A',
    year: '2020',
    description: 'desc',
    skills: [],
    logo: 'logo-a.png',
    url: 'http://unia.com',
  },
  {
    icon: 'code',
    course: 'SE',
    university: 'Uni B',
    year: '2021',
    description: 'desc',
    skills: [],
    logo: 'logo-b.png',
    url: 'http://unib.com',
  },
];

const mockCertificates: Certificate[] = [
  { name: 'Angular Basics', year: 2022, institution: 'Coursera', url: '#' },
  { name: 'TypeScript Advanced', year: 2023, institution: 'Udemy', url: '#' },
  { name: 'AI Fundamentals', year: 2021, institution: 'edX', url: '#' },
];

class MockEducationService {
  getEducationItems() {
    return mockEducationItems;
  }
  getCertificates() {
    return [...mockCertificates]; // clone
  }
}

describe('CvEducationComponent', () => {
  let component: CvEducationComponent;
  let fixture: ComponentFixture<CvEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEducationComponent],
      providers: [
        { provide: EducationService, useClass: MockEducationService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CvEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load education items and certificates from service on init', () => {
    expect(component.educationItems.length).toBe(mockEducationItems.length);
    expect(component.certificates.length).toBe(mockCertificates.length);
    expect(component.sortedCertificates.length).toBe(mockCertificates.length);
  });

  it('should render education items', () => {
    const items = fixture.debugElement.queryAll(
      By.css('app-cv-education-item'),
    );
    expect(items.length).toBe(mockEducationItems.length);
  });

  it('should render certificates initially', () => {
    const certs = fixture.debugElement.queryAll(
      By.css('app-cv-education-certificate'),
    );
    expect(certs.length).toBe(mockCertificates.length);
  });

  it('should sort certificates by name', () => {
    const event = { target: { value: 'name' } } as unknown as Event;
    component.sortCertificates(event);

    const sorted = [...mockCertificates].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    expect(component.sortedCertificates.map((c) => c.name)).toEqual(
      sorted.map((c) => c.name),
    );
  });

  it('should sort certificates by year (desc)', () => {
    const event = { target: { value: 'year' } } as unknown as Event;
    component.sortCertificates(event);

    const sorted = [...mockCertificates].sort((a, b) => b.year - a.year);
    expect(component.sortedCertificates.map((c) => c.year)).toEqual(
      sorted.map((c) => c.year),
    );
  });

  it('should sort certificates by institution', () => {
    const event = { target: { value: 'institution' } } as unknown as Event;
    component.sortCertificates(event);

    const sorted = [...mockCertificates].sort((a, b) =>
      a.institution.localeCompare(b.institution),
    );
    expect(component.sortedCertificates.map((c) => c.institution)).toEqual(
      sorted.map((c) => c.institution),
    );
  });
});
