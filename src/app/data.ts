// src/app/data.ts
export const SLIDES = [
  {
    image: 'assets/images/red_chilli.png',
    title: 'SAMSUNG',
    subtitle: 'No. 1 selling smartphone',
    description: 'Galaxy A35 5G',
    price: 'From ₹19,999'
  },
  {
    image: 'assets/images/home2.jpeg',
    title: 'APPLE',
    subtitle: 'Latest iPhone 15 Series',
    description: 'Super Retina Display',
    price: 'From ₹69,999'
  },
  {
    image: 'assets/images/home3.jpeg',
    title: 'ONEPLUS',
    subtitle: 'Flagship Killer',
    description: 'OnePlus 12R 5G',
    price: 'From ₹34,999'
  },
 
];











// src/app/data.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  brand: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Comfy Casual Shoes",
    price: 899,
    oldPrice: 2799,
    image: "assets/images/home2.jpeg",
    brand: "Nike"
  },
  {
    id: 2,
    name: "Deodorants",
    price: 199,
    oldPrice: 549,
    image: "assets/images/home2.jpeg",
    brand: "Fogg"
  },
  {
    id: 3,
    name: "Breezy Flip Flops",
    price: 499,
    oldPrice: 1399,
    image: "assets/images/home2.jpeg",
    brand: "Adidas"
  },
  {
    id: 4,
    name: "Sharp Formal Shoes",
    price: 899,
    oldPrice: 2799,
    image: "assets/images/home1.jpeg",
    brand: "Bata"
  },
  {
    id: 5,
    name: "Trendy Jeans",
    price: 649,
    oldPrice: 1799,
    image: "assets/images/home1.jpeg",
    brand: "Levis"
  },
  {
    id: 6,
    name: "Enticing Perfumes",
    price: 449,
    oldPrice: 1249,
    image: "assets/images/home1.jpeg",
    brand: "Wild Stone"
  }
];






































export interface MenProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  delivery: string;
}

export const MEN_PRODUCTS: MenProduct[] = [
  {
    id: 1,
    title: 'Men T-Shirt',
    image: 'https://m.media-amazon.com/images/I/41fCYhGblfL._MCnd_AC_.jpg',
    price: 599,
    oldPrice: 999,
    discount: '40% off',
    rating: 4.3,
    reviews: 120,
    delivery: 'Free delivery by Tomorrow'
  },
  {
    id: 2,
    title: 'Men T-Shirt',
    image: 'https://m.media-amazon.com/images/I/41fCYhGblfL._MCnd_AC_.jpg',
    price: 599,
    oldPrice: 999,
    discount: '40% off',
    rating: 4.3,
    reviews: 120,
    delivery: 'Free delivery by Tomorrow'
  },
  {
    id: 3,
    title: 'Men T-Shirt',
    image: 'https://m.media-amazon.com/images/I/41fCYhGblfL._MCnd_AC_.jpg',
    price: 599,
    oldPrice: 999,
    discount: '40% off',
    rating: 4.3,
    reviews: 120,
    delivery: 'Free delivery by Tomorrow'
  },
   {
    id: 4,
    title: 'Men T-Shirt',
    image: 'https://m.media-amazon.com/images/I/41fCYhGblfL._MCnd_AC_.jpg',
    price: 599,
    oldPrice: 999,
    discount: '40% off',
    rating: 4.3,
    reviews: 120,
    delivery: 'Free delivery by Tomorrow'
  },
  {
    id: 5,
    title: 'Men T-Shirt',
    image: 'https://m.media-amazon.com/images/I/41fCYhGblfL._MCnd_AC_.jpg',
    price: 599,
    oldPrice: 999,
    discount: '40% off',
    rating: 2.3,
    reviews: 120,
    delivery: 'Free delivery by Tomorrow'
  },
   {
    id: 6,
    title: 'Men T-Shirt',
    image: 'https://m.media-amazon.com/images/I/41fCYhGblfL._MCnd_AC_.jpg',
    price: 599,
    oldPrice: 999,
    discount: '40% off',
    rating: 2.3,
    reviews: 120,
    delivery: 'Free delivery by Tomorrow'
  },
  // ... more products
];
