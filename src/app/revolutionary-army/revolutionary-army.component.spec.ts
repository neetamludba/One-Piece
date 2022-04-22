import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutionaryArmyComponent } from './revolutionary-army.component';

describe('RevolutionaryArmyComponent', () => {
  let component: RevolutionaryArmyComponent;
  let fixture: ComponentFixture<RevolutionaryArmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevolutionaryArmyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolutionaryArmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
