import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    SidebarComponent,
    CardComponent,
    SubmitButtonComponent,
    EditButtonComponent,
    DeleteButtonComponent,
  ],
  exports: [
    SidebarComponent,
    CardComponent,
    SubmitButtonComponent,
    EditButtonComponent,
    DeleteButtonComponent,
  ]
})
export class ComponentsModule { }
