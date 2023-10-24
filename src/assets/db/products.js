import tahitian1 from '../img/Tahitian/tahitian1.jpg';
import tahitian2 from '../img/Tahitian/tahitian (2).jpg';
import tahitian3 from '../img/Tahitian/tahitian (3).jpg';
import tahitian4 from '../img/Tahitian/tahitian (4).jpg';

import planifolia1 from '../img/Planifolia/planifolia (1).jpg';
import planifolia2 from '../img/Planifolia/planifolia (2).jpg';
import planifolia3 from '../img/Planifolia/planifolia (3).jpg';
import planifolia4 from '../img/Planifolia/planifolia (4).jpg';

import chunk1 from '../img/Chunk/chunk (1).jpg';
import chunk2 from '../img/Chunk/chunk (2).jpg';
import chunk3 from '../img/Chunk/chunk (3).jpg';
import chunk4 from '../img/Chunk/chunk (4).jpg';

import powder1 from '../img/powder/powder (1).jpg';
import powder2 from '../img/powder/powder (2).jpg';
import powder3 from '../img/powder/powder (3).jpg';
import powder4 from '../img/powder/powder (4).jpg';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
export const products = [
  {
    _id: "1",
    qty: 0,
    category:"Vanilla Bean",
    name: "Tahitian Vanilla",
    images: {
      img1: tahitian1,
      img2: tahitian2,
      img3: tahitian3,
      img4: tahitian4
    },
    // overview:"Experience the unique and exotic flavor of Tahitian Vanilla Beans from Papua New Guinea. Carefully hand-picked and sun-cured, these premium beans embody the true essence of vanilla and are a must-have for any chef or vanilla enthusiast. The beans grown in Papua New Guinea are known for their fruity and floral notes which gives a distinctive touch to any culinary creation. Sourced from the finest growers, our beans are guaranteed to be of the highest quality and purity.",
    description:"Tahitian vanilla beans are shorter and plumper than other types of vanilla beans, and they have a higher oil and water content. This gives them a smooth, velvety texture and a complex flavor profile that is often described as floral, fruity, and slightly anisic. Tahitian vanilla beans are more delicate than other types of vanilla beans, and they can be easily overpowered by other flavors. For this reason, they are often used in desserts and other dishes where their unique flavor can shine through. Tahitian vanilla beans are a popular ingredient among gourmet pastry chefs and are used in a wide variety of desserts, including cakes, cookies, ice cream, and pudding. They are also used to make vanilla extract, which is a popular flavoring ingredient in many baked goods and desserts.",
    price: 1999,
    imagePath:"/img/product2.jpg",
    imageAlt:"Vanilla Picture",
    productCaption:"Discover culinary excellence with our Tahitian Vanilla Beans. These premium vanilla pods are a testament to quality and flavor. Meticulously handpicked and skillfully cured, each bean captures the essence of exotic sweetness. Elevate your dishes with the unique floral notes and velvety richness that Tahitian Vanilla delivers. Embrace the gourmet choice of chefs and home cooks alike, and unlock the secret to extraordinary culinary creations. Experience Tahitian Vanilla today.",
    specification: {
      origin: "Papua New Guinea",
      grade: "A / GOURMET",
      moisture: "27% - 33%",
      vanillinContent: "1,0% - 1,5%",
      size: "13-16 CM",
      flavor: "Strong, Sweet, Fruity",
      applications: "Baking, Pastry, Ice Cream, Confectionery, Gourmet Cooking"
    }
  },
  {
    _id: "2",
    qty: 0,
    category:"Vanilla Bean",
    name: "Planifiola Vanilla",
    images: {
      img1: planifolia1,
      img2: planifolia2,
      img3: planifolia3,
      img4: planifolia4
    },
    description:
      "Planifolia vanilla beans are the most common and popular type of vanilla bean. They are native to Mexico and Central America, but are now grown in many tropical countries around the world, including Madagascar, Indonesia, and Papua New Guinea. Planifolia vanilla beans are long, slender pods that are typically 6-8 inches long and 1/4 inch wide. They are green when unripe, but turn dark brown to black as they ripen. The inside of the bean is filled with tiny black seeds and a sticky, sweet-smelling paste. Planifolia vanilla beans have a rich, complex flavor that is often described as creamy, buttery, and floral. They are used in a wide variety of foods and beverages, including cakes, cookies, ice cream, custard, pudding, and coffee. Planifolia vanilla beans are also used in the production of vanilla extract, which is a popular flavoring ingredient in many baked goods and desserts.",
    price: 1999,
    newPrice: 1899,
    imagePath:"/img/product2.jpg",
    imageAlt:"Planifolia Vanilla Beans",
    productCaption:"Savor the unparalleled richness of our Planifolia Vanilla Beans, prized for their exquisite flavor and aroma. Hand-picked and meticulously sun-cured, these beans are the epitome of quality. Experience the pure essence of vanilla in every pod, perfect for enhancing your favorite desserts, beverages, and gourmet dishes. Elevate your culinary creations with the world's finest Planifolia Vanilla Beans, and indulge in the true taste of luxury",
    specification: {
      origin: "Papua New Guinea",
      grade: "A / GOURMET",
      moisture: "27% - 33%",
      vanillinContent: "1,8% - 2,4%",
      size: "13 - 22 CM",
      flavor: "Soft, Elegant, Creamy",
      applications: "Baking, Pastry, Chocolatiers, Extracts, Gourmet Cooking"
    }
  },
  {
    _id: "3",
    qty: 0,
    name: "Vanilla Seed",
    category:"Ground Vanilla",
    images: {
      img1: powder1,
      img2: powder2,
      img3: powder3,
      img4: powder4
    },
    description:
      "Introducing our premium Vanilla Seed product, a culinary gem that unlocks the essence of vanilla like never before. Derived from the prized vanilla pods, these tiny seeds encapsulate the heart and soul of this exquisite spice. Our Vanilla Seeds are meticulously extracted from the freshest, handpicked vanilla pods, ensuring the highest quality and purity. Each seed boasts a fragrant bouquet of sweet, floral notes that are a delightful addition to a wide array of culinary creations. The versatility of Vanilla Seeds is truly remarkable. These minute treasures can be incorporated into baking, confectionery, beverages, and gourmet dishes with ease. They add a burst of flavor and visual appeal, creating a signature touch that elevates your culinary masterpieces. At Vanillatelle, we take pride in delivering only the finest quality Vanilla Seeds, a testament to our commitment to providing premium ingredients for your culinary adventures. Unleash the true potential of vanilla in your kitchen with these exquisite seeds and experience the enchantment of their aromatic and flavorful influence on your creations. Elevate your dishes to the next level with the culinary secret that is Vanilla Seeds from Vanillatelle.",
    price: 1999,
    newPrice: 1899,
    imagePath:"/img/product2.jpg",
    imageAlt:"Vanilla Picture",
    productCaption:"Elevate your culinary artistry with our exquisite Vanilla Seeds – the secret ingredient that adds a touch of pure enchantment to your dishes. At Vanillatelle, we're committed to delivering the highest quality, handpicked Vanilla Seeds, empowering you to infuse your creations with the unparalleled essence of vanilla. Enhance your culinary journey with the magic of these tiny treasures, and experience the true flavor of excellence in every bite.",
    specification: {
      origin: "Indonesia",
      grade: "-",
      moisture: "-",
      vanillinContent: "-",
      size: "-",
      flavor: "-",
      applications: "-"
    }
  },
  {
    _id: "4",
    qty: 0,
    name: "Vanilla Chunk",
    category:"Vanilla Extract",
    images: {
      img1: chunk1,
      img2: chunk2,
      img3: chunk3,
      img4: chunk4
    },
    description:
      "Introducing our exquisite Vanilla Chunk product, a culinary treasure designed to elevate your culinary creations with the true essence of vanilla. Crafted with meticulous care and attention, these Vanilla Chunks are a unique and versatile addition to your kitchen. Our Vanilla Chunks are expertly made by infusing the finest vanilla essence into delectable, bite-sized pieces. This process captures the rich, sweet aroma and flavor of vanilla within each chunk, allowing you to effortlessly infuse your dishes with the warm, aromatic embrace of vanilla. The versatility of Vanilla Chunks is remarkable, making them an ideal companion for both sweet and savory creations. Whether you're baking, making confectionery, or experimenting with gourmet dishes, these delightful morsels add a distinctive touch that transforms your culinary creations into memorable experiences. At Vanillatelle, we are dedicated to delivering superior quality in every Vanilla Chunk, ensuring that your culinary endeavors are enhanced by the authentic essence of vanilla. Unleash your culinary imagination with these delightful chunks and experience the enchantment of vanilla in its most convenient form. Explore the endless possibilities and elevate your dishes with the culinary secret that is Vanilla Chunks from Vanillatelle.",
    price: 1999,
    newPrice: 1899,
    imagePath:"/img/product1.png",
    imageAlt:"Vanilla Picture",
    productCaption:"Unleash the power of pure vanilla in your culinary creations with Vanillatelle's Vanilla Chunks. These delectable morsels are a revelation of authentic vanilla flavor, offering an effortless way to elevate your dishes. Embrace the magic of our premium Vanilla Chunks and let your recipes dance with the enchanting essence of vanilla. Elevate your culinary endeavors and savor the extraordinary with Vanillatelle.",
    specification: {
      origin: "Indonesia",
      grade: "-",
      moisture: "-",
      vanillinContent: "-",
      size: "-",
      flavor: "-",
      applications: "-"
    }
  },
  // {
  //   _id: "5",
  //   qty: 0,
  //   name: "Papua Vanilla Beans - Grade A",
  //   category:"Vanilla Bean",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     images: {
  //       img1: tahitian1,
  //       img2: tahitian2,
  //       img3: tahitian3,
  //       img4: tahitian4
  //     },
  //   price: 1999,
  //   newPrice: 1899,
  //   imagePath:"/img/product1.png",
  //   imageAlt:"Vanilla Picture",
  //   productCaption:"Tahitian vanilla beans from Indonesia are typically smaller, plumper, and have a much higher oil and water substance than Bourbon beans. The aroma is flowery and fruity, with a strong flavor. They are frequently described as smelling like licorice, cherries, or wine. Gourmet pastry chefs adore the Tahitian (Tahitensis) variety, which is ideal for a wide range of applications. We provide Tahitian Vanilla beans in sizes 13 cm, 14 cm, 15 cm and 16 cm.",
  //   specification: {
  //     origin: "Indonesia",
  //     grade: "A / GOURMET",
  //     moisture: "25% – 35%",
  //     vanillinContent: "2.2%",
  //     size: "17-21 CM",
  //     flavor: "SMOKY, SOFT, SWEET, FRUITY",
  //     applications: "BAKING, BREWERIES, EXTRACT FOR COOKING"
  //   }
  // },
  // {
  //   _id: "6",
  //   qty: 0,
  //   name: "Papua Vanilla Beans - Grade B",
  //   category:"Vanilla Bean",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     images: {
  //       img1: tahitian1,
  //       img2: tahitian2,
  //       img3: tahitian3,
  //       img4: tahitian4
  //     },
  //   price: 1999,
  //   newPrice: 1899,
  //   imagePath:"/img/product1.png",
  //   imageAlt:"Vanilla Picture",
  //   productCaption:"Tahitian vanilla beans from Indonesia are typically smaller, plumper, and have a much higher oil and water substance than Bourbon beans. The aroma is flowery and fruity, with a strong flavor. They are frequently described as smelling like licorice, cherries, or wine. Gourmet pastry chefs adore the Tahitian (Tahitensis) variety, which is ideal for a wide range of applications. We provide Tahitian Vanilla beans in sizes 13 cm, 14 cm, 15 cm and 16 cm.",
  //   specification: {
  //     origin: "Indonesia",
  //     grade: "A / GOURMET",
  //     moisture: "25% – 35%",
  //     vanillinContent: "2.2%",
  //     size: "17-21 CM",
  //     flavor: "SMOKY, SOFT, SWEET, FRUITY",
  //     applications: "BAKING, BREWERIES, EXTRACT FOR COOKING"
  //   }
  // },
  // {
  //   _id: "7",
  //   qty: 0,
  //   name: "Indonesian Vanilla Beans - Grade A",
  //   category:"Vanilla Bean",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     images: {
  //       img1: tahitian1,
  //       img2: tahitian2,
  //       img3: tahitian3,
  //       img4: tahitian4
  //     },
  //   price: 1999,
  //   newPrice: 1899,
  //   imagePath:"/img/product1.png",
  //   imageAlt:"Vanilla Picture",
  //   productCaption:"Tahitian vanilla beans from Indonesia are typically smaller, plumper, and have a much higher oil and water substance than Bourbon beans. The aroma is flowery and fruity, with a strong flavor. They are frequently described as smelling like licorice, cherries, or wine. Gourmet pastry chefs adore the Tahitian (Tahitensis) variety, which is ideal for a wide range of applications. We provide Tahitian Vanilla beans in sizes 13 cm, 14 cm, 15 cm and 16 cm.",
  //   specification: {
  //     origin: "Indonesia",
  //     grade: "A / GOURMET",
  //     moisture: "25% – 35%",
  //     vanillinContent: "2.2%",
  //     size: "17-21 CM",
  //     flavor: "SMOKY, SOFT, SWEET, FRUITY",
  //     applications: "BAKING, BREWERIES, EXTRACT FOR COOKING"
  //   }
  // },
  // {
  //   _id: "8",
  //   qty: 0,
  //   name: "Indonesian Vanilla Beans - Grade B",
  //   category:"Vanilla Bean",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     images: {
  //       img1: tahitian1,
  //       img2: tahitian2,
  //       img3: tahitian3,
  //       img4: tahitian4
  //     },
  //   price: 1999,
  //   newPrice: 1899,
  //   imagePath:"/img/product1.png",
  //   imageAlt:"Vanilla Picture",
  //   productCaption:"Tahitian vanilla beans from Indonesia are typically smaller, plumper, and have a much higher oil and water substance than Bourbon beans. The aroma is flowery and fruity, with a strong flavor. They are frequently described as smelling like licorice, cherries, or wine. Gourmet pastry chefs adore the Tahitian (Tahitensis) variety, which is ideal for a wide range of applications. We provide Tahitian Vanilla beans in sizes 13 cm, 14 cm, 15 cm and 16 cm.",
  //   specification: {
  //     origin: "Indonesia",
  //     grade: "A / GOURMET",
  //     moisture: "25% – 35%",
  //     vanillinContent: "2.2%",
  //     size: "17-21 CM",
  //     flavor: "SMOKY, SOFT, SWEET, FRUITY",
  //     applications: "BAKING, BREWERIES, EXTRACT FOR COOKING"
  //   }
  // },
  
];
