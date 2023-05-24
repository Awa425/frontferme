import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAdminComponent } from './animal-admin.component';

describe('AnimalAdminComponent', () => {
  let component: AnimalAdminComponent;
  let fixture: ComponentFixture<AnimalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
