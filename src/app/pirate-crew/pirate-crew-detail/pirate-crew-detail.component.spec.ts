import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateCrewDetailComponent } from './pirate-crew-detail.component';

describe('PirateCrewDetailComponent', () => {
  let component: PirateCrewDetailComponent;
  let fixture: ComponentFixture<PirateCrewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirateCrewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PirateCrewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
