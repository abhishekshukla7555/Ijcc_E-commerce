import { Component, Input } from '@angular/core';
import { PRODUCT_CARDS } from '../../data';
import { Router } from '@angular/router';
import { CartService } from '../../Services/card.service';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    @Input() excludeId: number | null = null;  

    get filteredProducts() {
  if (this.excludeId) {
    return this.products.filter(p => p.id !== this.excludeId);
  }
  return this.products;
}
    
  products = PRODUCT_CARDS;
 getDiscountedPrice(oldPrice: number, discountPercent: string): number {
  const discount = parseInt(discountPercent.replace('%', '').replace('-', '')) || 0;
  return Math.round(oldPrice - (oldPrice * discount / 100));
}

  constructor(private router: Router, private cartService: CartService) {}

  viewDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }

 
addToCart(product: any) {
  // Extract discount (remove "%" and "-")
  const discountPercent = parseInt(product.price.discount.replace('%', '').replace('-', ''));

  // Build cart item
  const cartItem = {
    id: product.id,
    title: product.title,
    image: product.imgFront,
    oldPrice: product.price.old,        // ✅ keep old price
    discountPercent: discountPercent,   // ✅ keep discount
    quantity: 1
  };

  this.cartService.addToCart(cartItem);
  alert(`${product.title} added to cart ✅`);
}


}
