import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

const ROUTES_WEBSITE: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/security/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: '', component: HomeLayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./pages/products/list-page/list-page.module').then(m => m.ListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES_WEBSITE, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
