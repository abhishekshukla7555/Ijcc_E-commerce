import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { KOREAN_CREAM_PRODUCT } from '../../../korean-cream';
import { CartService } from '../../../Services/card.service';


@Component({
  selector: 'app-product-cream',
  standalone: false,
  templateUrl: './product-cream.component.html',
  styleUrls: ['./product-cream.component.css']
})
export class ProductCreamComponent {
  @Input() excludeId: number | null = null;

  products = KOREAN_CREAM_PRODUCT;
  displayedProducts: any[] = [];
  selectedSort: string = "default";

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.applySort();
  }

  get filteredProducts() {
    if (this.excludeId) {
      return this.products.filter(p => p.id !== this.excludeId);
    }
    return this.products;
  }

  // ✅ Sorting logic (same as Uneako)
  applySort() {
    let sorted = [...this.filteredProducts];

    switch (this.selectedSort) {
      case "popularity":
        sorted = sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;

      case "latest":
        sorted = [...sorted].sort((a, b) => b.id - a.id).slice(0, 12);
        break;

      case "lowToHigh":
        sorted = sorted.sort((a, b) =>
          this.getDiscountedPrice(a.price.old, a.price.discount) -
          this.getDiscountedPrice(b.price.old, b.price.discount)
        );
        break;

      case "highToLow":
        sorted = sorted.sort((a, b) =>
          this.getDiscountedPrice(b.price.old, b.price.discount) -
          this.getDiscountedPrice(a.price.old, a.price.discount)
        );
        break;

      default:
        sorted = this.filteredProducts;
    }

    this.displayedProducts = sorted;
  }

  viewDetails(productId: number) {
    this.router.navigate(['/korean-cream', productId]); // ✅ route cream detail
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
      discountedPrice: this.getDiscountedPrice(product.price.old, product.price.discount),
      discountPercent: discountPercent,
      size: product.sizes?.[0] || null,
      color: product.colors?.[0]?.name || null,
      quantity: 1
    };

    this.cartService.addToCart(cartItem);
    alert(`${product.title} added to cart ✅`);
  }
}
