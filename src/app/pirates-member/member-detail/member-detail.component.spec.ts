import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MemberDetailComponent } from './member-detail.component';

describe('MemberDetailsComponent', () => {
  let component: MemberDetailComponent;
  let fixture: ComponentFixture<MemberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [MemberDetailComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
