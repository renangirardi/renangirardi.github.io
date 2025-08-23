import { TestBed } from '@angular/core/testing';
import { EducationService } from './education.service';

describe('EducationService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEducationItems', () => {
    it('should return an array of education items', () => {
      const items = service.getEducationItems();
      expect(Array.isArray(items)).toBeTrue();
      expect(items.length).toBeGreaterThan(0);
    });

    it('should return education items with required properties', () => {
      const items = service.getEducationItems();
      items.forEach((item) => {
        expect(item).toEqual(
          jasmine.objectContaining({
            icon: jasmine.any(String),
            course: jasmine.any(String),
            university: jasmine.any(String),
            year: jasmine.any(String),
            description: jasmine.any(String),
            skills: jasmine.any(Array),
            logo: jasmine.any(String),
            url: jasmine.any(String),
          }),
        );
      });
    });
  });

  describe('getCertificates', () => {
    it('should return an array of certificates', () => {
      const certificates = service.getCertificates();
      expect(Array.isArray(certificates)).toBeTrue();
      expect(certificates.length).toBeGreaterThan(0);
    });

    it('should return certificates with required properties', () => {
      const certificates = service.getCertificates();
      certificates.forEach((cert) => {
        expect(cert).toEqual(
          jasmine.objectContaining({
            name: jasmine.any(String),
            year: jasmine.any(Number),
            institution: jasmine.any(String),
            url: jasmine.any(String),
          }),
        );
      });
    });
  });

  it('should always return the same education items array instance', () => {
    const first = service.getEducationItems();
    const second = service.getEducationItems();
    expect(first).toBe(second);
  });

  it('should always return the same certificates array instance', () => {
    const first = service.getCertificates();
    const second = service.getCertificates();
    expect(first).toBe(second);
  });
});
