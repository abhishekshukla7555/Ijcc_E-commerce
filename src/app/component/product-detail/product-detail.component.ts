import { Component, Input } from '@angular/core';
import { PRODUCT_CARDS } from '../../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 product: any;
  selectedImage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCT_CARDS.find(p => p.id === id);

    if (this.product && this.product.images.length > 0) {
      this.selectedImage = this.product.images[0];
    }
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }
}
