import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.dialogForm = this.formBuilder.group({
      bestCase: [''],
      worstCase: [''],
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setTimeLimit() {
    this.dialogRef.close();
  }
}
