import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolutionaryArmyListComponent } from './revolutionary-army-list.component';

describe('RevolutionaryArmyListComponent', () => {
  let component: RevolutionaryArmyListComponent;
  let fixture: ComponentFixture<RevolutionaryArmyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevolutionaryArmyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevolutionaryArmyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
