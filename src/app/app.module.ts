import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar1Component } from './component/nav-bar1/nav-bar1.component';
import { NavBar2Component } from './component/nav-bar2/nav-bar2.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ReturnOrdersPageComponent } from './component/return-orders-page/return-orders-page.component';
import { CardPagesComponent } from './component/card-pages/card-pages.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { FooterComponent } from './component/footer/footer.component'; // import karo
import { ProductComponent } from './component/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { OffSectionComponent } from './off-section/off-section.component';
import { ReviewSectionComponent } from './component/review-section/review-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar1Component,
    NavBar2Component,
    LoginPageComponent,
    ReturnOrdersPageComponent,
    CardPagesComponent,
    HomePageComponent,
    ProductComponent,
    ProductDetailComponent,
    OffSectionComponent,
    ReviewSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent   // import me likho, declarations me nahi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
