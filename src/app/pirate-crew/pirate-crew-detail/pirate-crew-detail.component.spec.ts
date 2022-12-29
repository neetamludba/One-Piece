import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PirateCrewDetailComponent } from './pirate-crew-detail.component';

describe('PirateCrewDetailComponent', () => {
  let component: PirateCrewDetailComponent;
  let fixture: ComponentFixture<PirateCrewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
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
