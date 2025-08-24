import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CvEducationCertificateComponent } from './cv-education-certificate.component';
import { Certificate } from '../../../../../core/models/certificate';

describe('CvEducationCertificateComponent', () => {
  let component: CvEducationCertificateComponent;
  let fixture: ComponentFixture<CvEducationCertificateComponent>;

  const mockCertificate: Certificate = {
    name: 'Angular Certification',
    year: 2023,
    institution: 'OpenAI',
    url: 'https://example.com/cert',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEducationCertificateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvEducationCertificateComponent);
    component = fixture.componentInstance;
    component.certificate = mockCertificate;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render certificate info correctly', () => {
    const imgEl: HTMLImageElement = fixture.debugElement.query(
      By.css('img'),
    ).nativeElement;
    const linkEl: HTMLAnchorElement = fixture.debugElement.query(
      By.css('a'),
    ).nativeElement;
    const titleEl: HTMLElement = fixture.debugElement.query(
      By.css('h4'),
    ).nativeElement;
    const yearEl: HTMLElement = fixture.debugElement.query(
      By.css('.cv-education-certificate__year'),
    ).nativeElement;

    expect(imgEl.src).toContain(
      `/assets/images/cv/${mockCertificate.institution}_logo.jpeg`,
    );
    expect(imgEl.alt).toBe(`${mockCertificate.institution} logo`);
    expect(imgEl.title).toBe(mockCertificate.institution);

    expect(linkEl.href).toBe(mockCertificate.url);
    expect(titleEl.textContent).toBe(mockCertificate.name);

    expect(yearEl.textContent).toBe(String(mockCertificate.year));
  });
});
