import { Component } from '@angular/core';
import { Product, PRODUCTS, SLIDES } from '../../data';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

   slides = SLIDES;
  currentIndex = 0;
  autoSlideInterval: any;

  products: Product[] = PRODUCTS;
  infiniteProducts = [...PRODUCTS, ...PRODUCTS]; // for infinite loop

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
