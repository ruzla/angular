import { WelcomeComponent } from './home/welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductModule } from './modules/product.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { ProductRoutingModule } from './modules/product-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
    ProductRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
