import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCvItemComponent } from './homepage-cv-item.component';

describe('HomepageCvItemComponent', () => {
  let component: HomepageCvItemComponent;
  let fixture: ComponentFixture<HomepageCvItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageCvItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCvItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
