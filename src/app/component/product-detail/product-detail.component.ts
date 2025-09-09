import { Component } from '@angular/core';
import { PRODUCT_CARDS } from '../../data';
import { UNEAKO_PRODUCT } from '../../uneako';   // ✅ import Uneako data
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../Services/card.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;
  selectedImage: string = '';
  selectedColor: any = null;
  selectedSize: string = '';
  deliveryDate: string = '';
  discountedPrice: number = 0;
  isUneako: boolean = false;  // ✅ track karne ke liye

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));


      

      // ✅ Route check karo
      const currentUrl = this.route.snapshot.routeConfig?.path;
      this.isUneako = currentUrl?.startsWith('uneako') ?? false;

      if (this.isUneako) {
        this.product = UNEAKO_PRODUCT.find(p => p.id === id);
      } else {
        this.product = PRODUCT_CARDS.find(p => p.id === id);
      }

      if (this.product) {
        this.selectedImage = this.product.images[0];
        this.selectedColor = this.product.colors?.[0] || null;
        this.selectedSize = this.product.sizes?.[0] || '';

        const discountPercent = parseInt(
          this.product.price.discount.replace('%', '').replace('-', '')
        );
        this.discountedPrice = Math.round(
          this.product.price.old - (this.product.price.old * discountPercent) / 100
        );

        const today = new Date();
        today.setDate(today.getDate() + 7);
        this.deliveryDate = today.toDateString();

        // ✅ Scroll to top on load
        window.scrollTo(0, 0);
      }
    });
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }

  selectColor(color: any) {
    this.selectedColor = color;
  }

  addToCart() {
    if (!this.product) return;

    const discountPercent = parseInt(
      this.product.price.discount.replace('%', '').replace('-', '')
    );

    const cartItem = {
      id: this.product.id,
      title: this.product.title,
      image: this.product.imgFront,
      oldPrice: this.product.price.old,
      discountedPrice: this.discountedPrice,
      discountPercent,
      size: this.selectedSize,
      color: this.selectedColor?.name,
      quantity: 1
    };

    this.cartService.addToCart(cartItem);
    alert(`${this.product.title} added to cart ✅`);
  }
}
