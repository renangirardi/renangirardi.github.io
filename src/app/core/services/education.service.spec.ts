import { TestBed } from '@angular/core/testing';
import { EducationService } from './education.service';
import { Education } from '../models/education';
import { Certificate } from '../models/certificate';

describe('EducationService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationService);

    // Mock global fetch
    spyOn(window, 'fetch').and.callFake((input: RequestInfo | URL) => {
      const url = input.toString();

      if (url.includes('education.json')) {
        return Promise.resolve({
          json: () =>
            Promise.resolve([
              {
                icon: 'icon.png',
                course: 'Computer Science',
                university: 'Test University',
                year: '2023',
                description: 'Some description',
                skills: ['Angular', 'TypeScript'],
                logo: 'logo.png',
                url: 'http://test.edu',
              },
            ] as Education[]),
        } as Response);
      }

      if (url.includes('certificates.json')) {
        return Promise.resolve({
          json: () =>
            Promise.resolve([
              {
                name: 'AWS Certified',
                year: 2022,
                institution: 'Amazon',
                url: 'http://aws.amazon.com',
              },
            ] as Certificate[]),
        } as Response);
      }

      return Promise.reject(new Error('Unknown URL'));
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getEducationItems', () => {
    it('should return an array of education items', async () => {
      const items = await service.getEducationItems();
      expect(Array.isArray(items)).toBeTrue();
      expect(items.length).toBeGreaterThan(0);
    });

    it('should return education items with required properties', async () => {
      const items = await service.getEducationItems();
      expect(items[0]).toEqual(
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

  describe('getCertificates', () => {
    it('should return an array of certificates', async () => {
      const certs = await service.getCertificates();
      expect(Array.isArray(certs)).toBeTrue();
      expect(certs.length).toBeGreaterThan(0);
    });

    it('should return certificates with required properties', async () => {
      const certs = await service.getCertificates();
      expect(certs[0]).toEqual(
        jasmine.objectContaining({
          name: jasmine.any(String),
          year: jasmine.any(Number),
          institution: jasmine.any(String),
          url: jasmine.any(String),
        }),
      );
    });
  });

  it('should handle fetch errors gracefully', async () => {
    (window.fetch as jasmine.Spy).and.returnValue(
      Promise.reject('Network error'),
    );

    const items = await service.getEducationItems();
    const certs = await service.getCertificates();

    expect(items).toEqual([]);
    expect(certs).toEqual([]);
  });
});
