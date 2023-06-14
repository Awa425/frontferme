import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUpdateEmployeComponent } from './update-update-employe.component';

describe('UpdateUpdateEmployeComponent', () => {
  let component: UpdateUpdateEmployeComponent;
  let fixture: ComponentFixture<UpdateUpdateEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUpdateEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUpdateEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
