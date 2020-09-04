import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule
  ]
})
export class HomeLayoutModule { }
