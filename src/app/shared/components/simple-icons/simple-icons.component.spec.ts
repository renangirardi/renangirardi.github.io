import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIconsComponent } from './simple-icons.component';

describe('SimpleIconsComponent', () => {
  let component: SimpleIconsComponent;
  let fixture: ComponentFixture<SimpleIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
