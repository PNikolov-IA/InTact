import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-report-create-form',
  templateUrl: './table-report-create-form.component.html',
  styleUrls: ['./table-report-create-form.component.scss']
})
export class TableReportCreateFormComponent implements OnInit {
  periods = [
    { option: '15 minutes', value: 15 },
    { option: '30 minutes', value: 30 },
    { option: '45 minutes', value: 45 },
    { option: '1 hour', value: 60 },
    { option: '2 hours', value: 120 },
    { option: '4 hours', value: 240 },
    { option: '8 hours', value: 480 },
    { option: '12 hours', value: 720 },
    { option: '24 hours', value: 144 }
  ];

  tableReportForm: FormGroup;
  disableSelect = new FormControl(false);

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.tableReportForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      period: ['', [Validators.required]],
      days: [''],
      hours: ['']
    })
  }

  create() {

  }

  cancel() {
    this.router.navigate(['/reports/all']);
  }
}
