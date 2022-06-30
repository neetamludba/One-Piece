import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateCrewListComponent } from './pirate-crew-list.component';

describe('PirateCrewListComponent', () => {
  let component: PirateCrewListComponent;
  let fixture: ComponentFixture<PirateCrewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirateCrewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateCrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
