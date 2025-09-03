import { Component } from '@angular/core';
import { MEN_PRODUCTS, MenProduct } from '../../data';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
 products: MenProduct[] = MEN_PRODUCTS; 
   filteredProducts: MenProduct[] = this.products;
}
