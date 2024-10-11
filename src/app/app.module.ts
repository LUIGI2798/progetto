import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, BrandComponent, HomeComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideHttpClient(withFetch())],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
