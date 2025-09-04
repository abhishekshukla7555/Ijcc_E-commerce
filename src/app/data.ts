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
    image: "assets/images/KimchiJar.png ",
    brand: "Nike"
  },
  {
    id: 2,
    name: "Deodorants",
    price: 199,
    oldPrice: 549,
    image: "assets/images/Kimchijar3.png",
    brand: "Fogg"
  },
  {
    id: 3,
    name: "Breezy Flip Flops",
    price: 499,
    oldPrice: 1399,
    image: "assets/images/Kimchijar2.png",
    brand: "Adidas"
  },
  {
    id: 4,
    name: "Sharp Formal Shoes",
    price: 899,
    oldPrice: 2799,
    image: "assets/images/kimchibowl.png",
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
    image: "assets/images/Kimchijar2.png",
    brand: "Wild Stone"
  }
];




































// src/app/data.ts
export const PRODUCT_CARDS = [
  {
    id: 1,
    title: 'Eco Large Jute Custom Bag',
    price: '₹250.00',
    imgFront: 'assets/images/home1.jpeg',
    imgBack: 'assets/images/home2.jpeg'
  },
  {
    id: 2,
    title: 'Charcoal Face Pack',
    price: '₹199.00',
    imgFront: 'assets/images/home1.jpeg',
    imgBack: 'assets/images/home2.jpeg'
  },
  {
    id: 3,
    title: 'Fewture Cotton Bag',
    price: '₹150.00',
    imgFront: 'assets/images/home1.jpeg',
    imgBack: 'assets/images/home2.jpeg'
  },
  {
    id: 4,
    title: 'Stylus File Folder',
    price: '₹120.00',
   imgFront: 'assets/images/home1.jpeg',
    imgBack: 'assets/images/home2.jpeg'
  }
];
