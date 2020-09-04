import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page.component';


const ROUTES: Routes = [
  {
    path: '',
    component: ListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ListPageRoutingModule { }
