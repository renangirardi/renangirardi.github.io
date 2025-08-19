import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExperienceComponent } from './cv-experience.component';

describe('CvExperienceComponent', () => {
  let component: CvExperienceComponent;
  let fixture: ComponentFixture<CvExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
