import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/card.service';


@Component({
  selector: 'app-card-pages',
  standalone: false,
  templateUrl: './card-pages.component.html',
  styleUrl: './card-pages.component.css'
})
export class CardPagesComponent implements OnInit {
totalItems: any;
saveForLater(_t7: number) {
throw new Error('Method not implemented.');
}
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  increaseQty(index: number) {
    this.cartItems[index].quantity++;
    this.cartService.updateQuantity(index, this.cartItems[index].quantity);
  }

  decreaseQty(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.cartService.updateQuantity(index, this.cartItems[index].quantity);
    }
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCart();
  }
 getDiscountedPrice(oldPrice: number, discountPercent: number): number {
  return Math.round(oldPrice - (oldPrice * discountPercent) / 100);
}

get totalPrice(): number {
  return this.cartItems.reduce(
    (sum, item) => sum + this.getDiscountedPrice(item.oldPrice, item.discountPercent) * item.quantity,
    0
  );
}

get totalSavings(): number {
  return this.cartItems.reduce(
    (sum, item) =>
      sum + (item.oldPrice - this.getDiscountedPrice(item.oldPrice, item.discountPercent)) * item.quantity,
    0
  );
}



}
