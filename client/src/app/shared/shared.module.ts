import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ToastrModule
  ]
})
export class SharedModule { }
