import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page.component';
import { ListPageRoutingModule } from './list-page-routing.module';
import { ItemProductModule } from './item-product/item-product.module';

@NgModule({
  declarations: [
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ListPageRoutingModule,
    ItemProductModule
  ]
})
export class ListPageModule { }
