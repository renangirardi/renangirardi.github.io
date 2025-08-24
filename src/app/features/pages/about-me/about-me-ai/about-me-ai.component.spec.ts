import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutMeAiComponent } from './about-me-ai.component';
import { ImageGalleryComponent } from '../../../../shared/components/image-gallery/image-gallery.component';
import { FadeInDirective } from '../../../../core/directives/fade-in.directive';

describe('AboutMeAiComponent', () => {
  let component: AboutMeAiComponent;
  let fixture: ComponentFixture<AboutMeAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeAiComponent, ImageGalleryComponent, FadeInDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title', () => {
    const titleElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(titleElement.textContent).toContain('GenAI enthusiast');
  });

  it('should render at least two paragraphs with content', () => {
    const paragraphs = fixture.debugElement.queryAll(By.css('p'));
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    expect(paragraphs[0].nativeElement.textContent).toContain(
      'My curiosity for new technologies',
    );
    expect(paragraphs[1].nativeElement.textContent).toContain(
      'But my relationship with GenAI goes beyond',
    );
  });

  it('should render two image galleries with correct galleryImages input', () => {
    const galleries = fixture.debugElement.queryAll(
      By.directive(ImageGalleryComponent),
    );
    expect(galleries.length).toBe(2);

    const firstGallery = galleries[0]
      .componentInstance as ImageGalleryComponent;
    const secondGallery = galleries[1]
      .componentInstance as ImageGalleryComponent;

    expect(firstGallery.galleryImages).toBe('about-me-1');
    expect(secondGallery.galleryImages).toBe('about-me-2');
  });

  it('should have a link to Instagram profile', () => {
    const link = fixture.debugElement.query(
      By.css('a[href="https://www.instagram.com/ai.cthulhu"]'),
    );
    expect(link).toBeTruthy();
    expect(link.nativeElement.textContent).toContain('@ai.cthulhu');
  });
});
