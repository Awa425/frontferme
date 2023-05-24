import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmingPraticeComponent } from './farming-pratice.component';

describe('FarmingPraticeComponent', () => {
  let component: FarmingPraticeComponent;
  let fixture: ComponentFixture<FarmingPraticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmingPraticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmingPraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
