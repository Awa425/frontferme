import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FermeAvantageComponent } from './ferme-avantage.component';

describe('FermeAvantageComponent', () => {
  let component: FermeAvantageComponent;
  let fixture: ComponentFixture<FermeAvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FermeAvantageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FermeAvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
