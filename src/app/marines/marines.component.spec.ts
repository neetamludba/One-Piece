import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinesComponent } from './marines.component';

describe('MarinesComponent', () => {
  let component: MarinesComponent;
  let fixture: ComponentFixture<MarinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
