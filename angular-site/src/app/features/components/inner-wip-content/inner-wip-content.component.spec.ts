import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { InnerWipContentComponent } from './inner-wip-content.component';

describe('InnerWipContentComponent', () => {
  let component: InnerWipContentComponent;
  let fixture: ComponentFixture<InnerWipContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnerWipContentComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(InnerWipContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
