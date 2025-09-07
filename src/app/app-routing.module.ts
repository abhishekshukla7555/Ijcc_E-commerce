import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Existing components
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ReturnOrdersPageComponent } from './component/return-orders-page/return-orders-page.component';
import { CardPagesComponent } from './component/card-pages/card-pages.component';

// New product components
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },       // Default Home
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignInComponent },
  { path: 'returns', component: ReturnOrdersPageComponent },
  { path: 'cart', component: CardPagesComponent },

  // New product routes
  { path: 'products', component: ProductComponent },              // product listing
  { path: 'products/:id', component: ProductDetailComponent },    // product detail

  { path: '**', redirectTo: '' } // Wildcard -> Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
