import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEducationItemComponent } from './cv-education-item.component';

describe('CvEducationItemComponent', () => {
  let component: CvEducationItemComponent;
  let fixture: ComponentFixture<CvEducationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEducationItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvEducationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
