import { FormsModule } from '@angular/forms';
import { StarComponent } from './../../star-rating/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    StarComponent
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
