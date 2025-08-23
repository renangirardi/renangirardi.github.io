import { TestBed } from '@angular/core/testing';
import { ImageGalleryService } from './image-gallery.service';

describe('ImageGalleryService', () => {
  let service: ImageGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of images from getAboutMeImages1', () => {
    const images = service.getAboutMeImages1();
    expect(Array.isArray(images)).toBeTrue();
    expect(images.length).toBe(6);
  });

  it('should return an array of images from getAboutMeImages2', () => {
    const images = service.getAboutMeImages2();
    expect(Array.isArray(images)).toBeTrue();
    expect(images.length).toBe(6);
  });

  it('should return images with src and alt properties in getAboutMeImages1', () => {
    const images = service.getAboutMeImages1();
    images.forEach((img) => {
      expect(img.src).toBeDefined();
      expect(img.alt).toBeDefined();
      expect(typeof img.src).toBe('string');
      expect(typeof img.alt).toBe('string');
    });
  });

  it('should return images with src and alt properties in getAboutMeImages2', () => {
    const images = service.getAboutMeImages2();
    images.forEach((img) => {
      expect(img.src).toBeDefined();
      expect(img.alt).toBeDefined();
      expect(typeof img.src).toBe('string');
      expect(typeof img.alt).toBe('string');
    });
  });

  it('should not mutate aboutMeImages1 when modifying returned array', () => {
    const images = service.getAboutMeImages1();
    images.push({ src: 'fake.jpg', alt: 'Fake' });
    expect(service.getAboutMeImages1().length).toBe(6);
  });

  it('should not mutate aboutMeImages2 when modifying returned array', () => {
    const images = service.getAboutMeImages2();
    images.push({ src: 'fake.jpg', alt: 'Fake' });
    expect(service.getAboutMeImages2().length).toBe(6);
  });

  it('should have alt text "AI Cthulhu" for all images in getAboutMeImages1', () => {
    const images = service.getAboutMeImages1();
    images.forEach((img) => {
      expect(img.alt).toBe('AI Cthulhu');
    });
  });

  it('should have alt text "AI Cthulhu" for all images in getAboutMeImages2', () => {
    const images = service.getAboutMeImages2();
    images.forEach((img) => {
      expect(img.alt).toBe('AI Cthulhu');
    });
  });
});
