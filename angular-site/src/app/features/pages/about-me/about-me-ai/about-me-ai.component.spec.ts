import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeAiComponent } from './about-me-ai.component';

describe('AboutMeAiComponent', () => {
  let component: AboutMeAiComponent;
  let fixture: ComponentFixture<AboutMeAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
