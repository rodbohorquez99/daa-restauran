import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogConfirmComponent } from './delete-dialog-confirm.component';

describe('DeleteDialogConfirmComponent', () => {
  let component: DeleteDialogConfirmComponent;
  let fixture: ComponentFixture<DeleteDialogConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialogConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
