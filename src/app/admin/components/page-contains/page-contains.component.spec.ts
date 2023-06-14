import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainsComponent } from './page-contains.component';

describe('PageContainsComponent', () => {
  let component: PageContainsComponent;
  let fixture: ComponentFixture<PageContainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
