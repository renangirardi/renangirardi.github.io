import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAiComponent } from './homepage-ai.component';

describe('HomepageAiComponent', () => {
  let component: HomepageAiComponent;
  let fixture: ComponentFixture<HomepageAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageAiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
