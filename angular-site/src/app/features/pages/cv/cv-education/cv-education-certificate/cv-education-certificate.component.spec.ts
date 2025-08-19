import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEducationCertificateComponent } from './cv-education-certificate.component';

describe('CvEducationCertificateComponent', () => {
  let component: CvEducationCertificateComponent;
  let fixture: ComponentFixture<CvEducationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEducationCertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvEducationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
