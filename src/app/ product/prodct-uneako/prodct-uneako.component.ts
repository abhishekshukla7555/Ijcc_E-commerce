import { Component, Input } from '@angular/core';
import { UNEAKO_PRODUCT } from '../../uneako';
import { Router } from '@angular/router';
import { CartService } from '../../Services/card.service';

@Component({
  selector: 'app-prodct-uneako',
  standalone: false,
  templateUrl: './prodct-uneako.component.html',
  styleUrls: ['./prodct-uneako.component.css'] // ✅ fixed plural
})
export class ProdctUneakoComponent {
  @Input() excludeId: number | null = null;

  products = UNEAKO_PRODUCT;
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

  // ✅ Sorting logic
  applySort() {
    let sorted = [...this.filteredProducts];

    switch (this.selectedSort) {
      case "popularity": // sort by rating + reviews
        sorted = sorted.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;

      case "latest": // just pick 12 newest by ID (or slice top 12)
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

      default: // Default = keep original order
        sorted = this.filteredProducts;
    }

    this.displayedProducts = sorted;
  }

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
