import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cart';
  private cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  // Observable for components
  cartCount$ = this.cartCount.asObservable();

  constructor() {
    const storedCart = localStorage.getItem(this.storageKey);
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.updateCount(); // ✅ initialize count
  }

  getCart(): any[] {
    return this.cartItems;
  }

  addToCart(product: any) {
    const existing = this.cartItems.find(item => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateStorage();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.updateStorage();
  }

  updateQuantity(index: number, qty: number) {
    this.cartItems[index].quantity = qty;
    this.updateStorage();
  }

  private updateStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    this.updateCount();
  }

  private updateCount() {
    const totalItems = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCount.next(totalItems);
  }
}
