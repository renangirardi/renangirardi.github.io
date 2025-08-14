import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEducationItemComponent } from './about-education-item.component';

describe('AboutEducationItemComponent', () => {
  let component: AboutEducationItemComponent;
  let fixture: ComponentFixture<AboutEducationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEducationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEducationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
