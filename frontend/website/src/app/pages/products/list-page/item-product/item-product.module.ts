import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemProductComponent } from './item-product.component';

@NgModule({
  declarations: [
    ItemProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ItemProductComponent]
})
export class ItemProductModule { }
