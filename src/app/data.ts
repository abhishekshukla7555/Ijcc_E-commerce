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
      image: 'assets/images/Kimchi_image_for_heading.png',
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
      image: "assets/images/Kimchi_Jar_1.png",
      brand: "Nike"
    },
    {
      id: 2,
      name: "Deodorants",
      price: 199,
      oldPrice: 549,
      image: "assets/images/Kimchi_Jar_1.png",
      brand: "Fogg"
    },
    {
      id: 3,
      name: "Breezy Flip Flops",
      price: 499,
      oldPrice: 1399,
      image: "assets/images/Kimchi_Jar_1.png",
      brand: "Adidas"
    },
    {
      id: 4,
      name: "Sharp Formal Shoes",
      price: 899,
      oldPrice: 2799,
      image: "assets/images/Kimchi_Jar_1.png",
      brand: "Bata"
    },
    {
      id: 5,
      name: "Trendy Jeans",
      price: 649,
      oldPrice: 1799,
      image: "assets/images/Kimchi_Jar_1.png",
      brand: "Levis"
    },
    {
      id: 6,
      name: "Enticing Perfumes",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Kimchi_Jar_1.png",
      brand: "Wild Stone"
    }
  ];



    export const PRODUCT_CARDS = [

      {
      id: 1,
      brand: "HIGH STAR",
      title: "Women’s Shirt",
      description: "Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.",
      imgFront: "https://uneako.com/wp-content/uploads/2024/04/1-11.webp",
      imgBack: "assets/images/Kimchi_jar_2.png",
      images: [
        "https://uneako.com/wp-content/uploads/2024/04/1-11.webp",
        "assets/images/kimchibowl.png",
        "assets/images/kimchibowl.png",
        "assets/images/Kimchi_jar_2.png",
        "assets/images/kimchibowl.png"
      ],
      price: {
        old: 2000,
        discount: "-56%"
      },
      rating: 4,
      reviews: 600,
      colors: [
        { name: "White", image: "assets/images/logo.jpeg" },
        { name: "Blue", image: "assets/images/logo.jpeg" },
        { name: "Red", image: "assets/images/logo.jpeg" }
      ],
      sizes: ["M", "L", "XL"],
      delivery: {
        location: "Lucknow, India"
      },
      details: {
        material: "Cotton",
        sleeve: "Long Sleeve",
        fit: "Oversized",
        collar: "Spread Collar"
      }
    },
    {
      id: 2,
      brand: "HIGH STAR",
      title: "men’s Shirt",
      description: "Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.",
      imgFront: "https://uneako.com/wp-content/uploads/2024/04/1-11.webp",
      imgBack: "assets/images/Kimchi_jar_2.png",
      images: [
        "assets/images/kimchibowl.png",
        "assets/images/kimchibowl.png",
        "assets/images/Kimchi_jar_2.png",
        "assets/images/kimchibowl.png"
      ],
      price: {
        old: 100,
        discount: "-56%"
      },
      rating: 5,
      reviews: 600,
      colors: [
        { name: "White", image: "assets/images/logo.jpeg" },
        { name: "Blue", image: "assets/images/logo.jpeg" },
        { name: "Red", image: "assets/images/logo.jpeg" }
      ],
      sizes: ["M", "L", "XL"],
      delivery: {
        location: "Lucknow, India"
      },
      details: {
        material: "Cotton",
        sleeve: "Long Sleeve",
        fit: "Oversized",
        collar: "Spread Collar"
      }
    },
    {
      id: 3,
      title: 'Fewture Cotton Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 4,
      title: 'Stylus File Folder',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 5,
      title: 'Eco Large Jute Custom Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 6,
      title: 'Charcoal Face Pack',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 7,
      title: 'Fewture Cotton Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 8,
      title: 'Stylus File Folder',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 9,
      title: 'Eco Large Jute Custom Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 10,
      title: 'Charcoal Face Pack',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: "assets/images/Kimchi_Jar_1.png",
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 11,
      title: 'Fewture Cotton Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 12,
      title: 'Stylus File Folder',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi_Jar_1.png',
      imgBack: 'assets/images/kimchibowl.png'
    }
  ];
