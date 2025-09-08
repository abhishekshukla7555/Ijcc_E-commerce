import { Component, Input } from '@angular/core';
import { UNEAKO_PRODUCT } from '../../uneako';
import { Router } from '@angular/router';
import { CartService } from '../../Services/card.service';

@Component({
  selector: 'app-prodct-uneako',
  standalone: false,
  templateUrl: './prodct-uneako.component.html',
  styleUrl: './prodct-uneako.component.css'
})
export class ProdctUneakoComponent {
@Input() excludeId: number | null = null;

  products = UNEAKO_PRODUCT;

  get filteredProducts() {
    if (this.excludeId) {
      return this.products.filter(p => p.id !== this.excludeId);
    }
    return this.products;
  }

  constructor(private router: Router, private cartService: CartService) {}

  viewDetails(productId: number) {
    this.router.navigate(['/uneako', productId]);
  }

  getDiscountedPrice(oldPrice: number, discountPercent: string): number {
    const discount = parseInt(discountPercent.replace('%', '').replace('-', '')) || 0;
    return Math.round(oldPrice - (oldPrice * discount / 100));
  }

  addToCart(product: any) {
    const discountPercent = parseInt(product.price.discount.replace('%', '').replace('-', ''));

    const cartItem = {
      id: product.id,
      title: product.title,
      image: product.imgFront,
      oldPrice: product.price.old,
      discountPercent: discountPercent,
      quantity: 1
    };

    this.cartService.addToCart(cartItem);
    alert(`${product.title} added to cart ✅`);
  }
}
