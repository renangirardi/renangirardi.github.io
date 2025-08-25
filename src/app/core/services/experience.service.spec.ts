import { TestBed } from '@angular/core/testing';
import { ExperienceService } from './experience.service';
import { Experience } from '../models/experience';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of experience items', async () => {
    const items = await service.getExperienceItems();
    expect(Array.isArray(items)).toBeTrue();
    expect(items.length).toBeGreaterThan(0);
  });

  it('should return experience items with required properties', async () => {
    const items = await service.getExperienceItems();
    items.forEach((item) => {
      expect(item.icon).toBeDefined();
      expect(item.job).toBeDefined();
      expect(item.company).toBeDefined();
      expect(item.year).toBeDefined();
      expect(item.city).toBeDefined();
      expect(Array.isArray(item.description)).toBeTrue();
      expect(Array.isArray(item.skills)).toBeTrue();
      expect(item.logo).toBeDefined();
    });
  });

  it('should not mutate experienceItems when getExperienceItems is called', async () => {
    const items = await service.getExperienceItems();
    items.push({} as Experience);
    expect(
      await service.getExperienceItems().then((i) => i.length),
    ).not.toEqual(items.length);
  });

  it('should contain specific experience data', async () => {
    const items = await service.getExperienceItems();
    const dellExperience = items.find(
      (item) => item.company === 'Dell Technologies',
    );
    expect(dellExperience).toBeDefined();
    expect(dellExperience?.skills).toContain('Angular');
  });

  it('should have unique job titles', async () => {
    const items = await service.getExperienceItems();
    const jobs = items.map((item) => item.job);
    const uniqueJobs = Array.from(new Set(jobs));
    expect(jobs.length).toEqual(uniqueJobs.length);
  });

  it('should have at least one skill per experience item', async () => {
    const items = await service.getExperienceItems();
    items.forEach((item) => {
      expect(item.skills.length).toBeGreaterThan(0);
    });
  });

  it('should have at least one description per experience item', async () => {
    const items = await service.getExperienceItems();
    items.forEach((item) => {
      expect(item.description.length).toBeGreaterThan(0);
    });
  });
});
