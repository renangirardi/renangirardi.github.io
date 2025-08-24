import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading indicator initially', () => {
    const loader = fixture.debugElement.query(By.css('app-loading-indicator'));
    expect(component.loading).toBeTrue();
    expect(loader).toBeTruthy();
  });

  it('should hide loader after iframe loads and set iframe dimensions', (done) => {
    const iframe: HTMLIFrameElement = document.createElement('iframe');
    fixture.nativeElement.appendChild(iframe);

    setTimeout(() => {
      iframe.onload?.(new Event('load'));

      fixture.detectChanges();

      expect(component.loading).toBeFalse();
      expect(iframe.style.width).toBe('340px');
      expect(iframe.style.height).toBe('271px');

      const loader = fixture.debugElement.query(
        By.css('app-loading-indicator'),
      );
      expect(loader).toBeFalsy();

      done();
    });
  });
});
