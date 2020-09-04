import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeLayoutModule } from './layout/home-layout/home-layout.module';
import { LoginLayoutModule } from './layout/login-layout/login-layout.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeLayoutModule,
    LoginLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
