import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NextPageComponent } from './next-page.component';
import { By } from '@angular/platform-browser';

describe('NextPageComponent', () => {
  let component: NextPageComponent;
  let fixture: ComponentFixture<NextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextPageComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with class "container"', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section.classList).toContain('container');
  });

  it('should render h3 with input text', () => {
    component.text = 'Next page text';
    fixture.detectChanges();
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3).toBeTruthy();
    expect(h3.textContent).toContain('Next page text');
  });

  it('should render app-button with correct inputs', () => {
    component.btnText = 'Go!';
    component.nextPage = 'about';
    fixture.detectChanges();
    const buttonDebug = fixture.debugElement.query(By.css('app-button'));
    expect(buttonDebug).toBeTruthy();
    const buttonInstance = buttonDebug.componentInstance;
    expect(buttonInstance.text).toBe('Go!');
    expect(buttonInstance.style).toBe('tertiary');
    expect(buttonInstance.size).toBe('medium');
    expect(buttonInstance.routerLink).toEqual(['/', 'about']);
  });

  it('should have correct column classes', () => {
    const col2Divs = fixture.nativeElement.querySelectorAll('.col-2');
    expect(col2Divs.length).toBe(2);
    const col5 = fixture.nativeElement.querySelector('.col-5');
    expect(col5).toBeTruthy();
    const col3 = fixture.nativeElement.querySelector('.col-3');
    expect(col3).toBeTruthy();
  });

  it('should update button and text when inputs change', () => {
    component.text = 'New Text';
    component.btnText = 'Next!';
    component.nextPage = 'portfolio';
    fixture.detectChanges();
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toContain('New Text');
    const buttonDebug = fixture.debugElement.query(By.css('app-button'));
    const buttonInstance = buttonDebug.componentInstance;
    expect(buttonInstance.text).toBe('Next!');
    expect(buttonInstance.routerLink).toEqual(['/', 'portfolio']);
  });
});
