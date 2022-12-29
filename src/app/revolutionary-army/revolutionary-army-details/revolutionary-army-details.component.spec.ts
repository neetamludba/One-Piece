import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutionaryArmyDetailsComponent } from './revolutionary-army-details.component';

describe('RevolutionaryArmyDetailsComponent', () => {
  let component: RevolutionaryArmyDetailsComponent;
  let fixture: ComponentFixture<RevolutionaryArmyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevolutionaryArmyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevolutionaryArmyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
