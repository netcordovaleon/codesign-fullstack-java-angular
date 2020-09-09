import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './new-product.component';
import { NewProductRoutingModule } from './new-product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewProductModule { }
