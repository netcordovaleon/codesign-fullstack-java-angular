import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AuthComponent]
})
export class AuthorizationModule { }
