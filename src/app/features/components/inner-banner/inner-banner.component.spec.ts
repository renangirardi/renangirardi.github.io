import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InnerBannerComponent } from './inner-banner.component';

describe('InnerBannerComponent', () => {
  let component: InnerBannerComponent;
  let fixture: ComponentFixture<InnerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InnerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have undefined title by default', () => {
    expect(component.title).toBeUndefined();
  });

  it('should render the title when set', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Test Title');
  });

  it('should update the title in the template when changed', () => {
    component.title = 'First Title';
    fixture.detectChanges();
    let h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('First Title');

    component.title = 'Second Title';
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Second Title');
  });

  it('should have the correct CSS classes on section and h1', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section.classList).toContain('banner');
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.classList).toContain('banner__heading');
    expect(h1.classList).toContain('inner-page__heading');
  });

  it('should render empty h1 if title is not set', () => {
    component.title = '';
    fixture.detectChanges();
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent.trim()).toBe('');
  });
});
