import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratesDetailComponent } from './pirates-detail.component';

describe('PiratesDetailComponent', () => {
  let component: PiratesDetailComponent;
  let fixture: ComponentFixture<PiratesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiratesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
