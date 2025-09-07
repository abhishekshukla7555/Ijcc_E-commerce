import { Component } from '@angular/core';
import { CartService } from '../../Services/card.service';

@Component({
  selector: 'app-nav-bar1',
  standalone: false,
  templateUrl: './nav-bar1.component.html',
  styleUrl: './nav-bar1.component.css'
})
export class NavBar1Component {
 cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
