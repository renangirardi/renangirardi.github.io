import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { InnerWipContentComponent } from './inner-wip-content.component';
import { By } from '@angular/platform-browser';

describe('InnerWipContentComponent', () => {
  let component: InnerWipContentComponent;
  let fixture: ComponentFixture<InnerWipContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerWipContentComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(InnerWipContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render main element with correct class', () => {
    const main = fixture.nativeElement.querySelector('main');
    expect(main).toBeTruthy();
    expect(main.classList).toContain('main-wip-page');
  });

  it('should render h2 with "Work in Progress"', () => {
    const h2 = fixture.nativeElement.querySelector('.wip-message h2');
    expect(h2).toBeTruthy();
    expect(h2.textContent).toContain('Work in Progress');
  });

  it('should render image with correct src', () => {
    const img = fixture.nativeElement.querySelector('.wip-image img');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toBe('/assets/images/wip/wip-cthulhu.jpg');
  });

  it('should render app-button with correct inputs', () => {
    const buttonDebug = fixture.debugElement.query(By.css('app-button'));
    expect(buttonDebug).toBeTruthy();
    const buttonInstance = buttonDebug.componentInstance;
    expect(buttonInstance.style).toBe('secondary');
    expect(buttonInstance.size).toBe('medium');
    expect(buttonInstance.text).toBe('Back to Homepage');
    expect(buttonInstance.routerLink).toEqual(['/']);
  });
});
