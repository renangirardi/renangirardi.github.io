import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCvComponent } from './homepage-cv.component';

describe('HomepageCvComponent', () => {
  let component: HomepageCvComponent;
  let fixture: ComponentFixture<HomepageCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
