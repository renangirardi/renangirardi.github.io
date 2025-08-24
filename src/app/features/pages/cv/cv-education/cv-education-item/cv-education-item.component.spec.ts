import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CvEducationItemComponent } from './cv-education-item.component';
import { Education } from '../../../../../core/models/education';

describe('CvEducationItemComponent', () => {
  let component: CvEducationItemComponent;
  let fixture: ComponentFixture<CvEducationItemComponent>;

  const mockEducation: Education = {
    icon: 'school',
    course: 'Bachelor in Computer Science',
    university: 'OpenAI University',
    year: '2023',
    description:
      'Studied artificial intelligence, algorithms, and software engineering.',
    skills: ['Angular', 'TypeScript', 'AI'],
    logo: '/assets/images/universities/openai.png',
    url: 'https://openai-university.org',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEducationItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvEducationItemComponent);
    component = fixture.componentInstance;
    component.educationItem = mockEducation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course, university, year and description', () => {
    const courseEl = fixture.debugElement.query(
      By.css('.cv__course'),
    ).nativeElement;
    const universityEl = fixture.debugElement.query(
      By.css('.cv__university'),
    ).nativeElement;
    const yearEl = fixture.debugElement.query(
      By.css('.cv__year'),
    ).nativeElement;
    const descriptionEl = fixture.debugElement.query(
      By.css('.cv__description'),
    ).nativeElement;

    expect(courseEl.textContent).toBe(mockEducation.course);
    expect(universityEl.textContent).toBe(mockEducation.university);
    expect(yearEl.textContent).toBe(mockEducation.year);
    expect(descriptionEl.textContent).toContain(mockEducation.description);
  });

  it('should render logo with correct src and alt', () => {
    const imgEl: HTMLImageElement = fixture.debugElement.query(
      By.css('img'),
    ).nativeElement;
    expect(imgEl.src).toContain(mockEducation.logo);
    expect(imgEl.alt).toBe(`${mockEducation.university} logo`);
  });

  it('should render link with correct href', () => {
    const linkEl: HTMLAnchorElement = fixture.debugElement.query(
      By.css('a'),
    ).nativeElement;
    expect(linkEl.href).toBe(mockEducation.url + '/'); // Angular costuma adicionar "/" no fim
  });

  it('should render all skills using app-tag', () => {
    const skillEls = fixture.debugElement.queryAll(By.css('app-tag'));
    expect(skillEls.length).toBe(mockEducation.skills.length);
  });
});
