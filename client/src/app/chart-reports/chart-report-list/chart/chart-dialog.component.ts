import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chart-dialog',
    templateUrl: './chart-dialog.component.html',
})
export class ChartDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public router: Router
    ) { }
}
