import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratesListComponent } from './pirates-list.component';

describe('PiratesComponent', () => {
  let component: PiratesListComponent;
  let fixture: ComponentFixture<PiratesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiratesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiratesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
