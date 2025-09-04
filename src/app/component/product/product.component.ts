import { Component } from '@angular/core';
import {  PRODUCT_CARDS } from '../../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products = PRODUCT_CARDS;

  constructor(private router: Router) {}

  viewDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
