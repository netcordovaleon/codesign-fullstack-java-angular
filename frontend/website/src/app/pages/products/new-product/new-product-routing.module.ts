import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './new-product.component';


const ROUTES: Routes = [
  {
    path: '',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class NewProductRoutingModule { }
