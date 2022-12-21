import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
})
export class StudentDialogComponent {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });

  constructor(
    private readonly dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Student | null
  ) {
    if (data) {
      this.studentForm.patchValue(data);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
