import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaladieComponent } from './update-maladie.component';

describe('UpdateMaladieComponent', () => {
  let component: UpdateMaladieComponent;
  let fixture: ComponentFixture<UpdateMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
