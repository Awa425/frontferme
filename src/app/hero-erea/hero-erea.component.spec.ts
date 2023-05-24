import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEreaComponent } from './hero-erea.component';

describe('HeroEreaComponent', () => {
  let component: HeroEreaComponent;
  let fixture: ComponentFixture<HeroEreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
