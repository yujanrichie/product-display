import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCarouselComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
