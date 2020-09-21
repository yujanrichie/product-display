import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCarouselComponent } from 'src/app/components/product-carousel/product-carousel.component';
import { ProductDisplayComponent } from 'src/app/components/product-display/product-display.component';
import { SizeSelectorComponent } from 'src/app/components/size-selector/size-selector.component';
import { ProductTypeSelectorComponent } from 'src/app/components/product-type-selector/product-type-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCarouselComponent,
    ProductDisplayComponent,
    SizeSelectorComponent,
    ProductTypeSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
