import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';

@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginLayoutModule { }
