import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { NextPageComponent } from './next-page.component';

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
});
