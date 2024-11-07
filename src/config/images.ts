export const images = {
  hero: {
    main: "/images/lg-artcool-mirror.webp",
    alt: "LG ARTCOOL airconditioner in modern interieur"
  },
  products: {
    artcool: {
      black: "/images/rac-eu-lg-artcool-black.webp",
      mirror: "/images/lg-artcool-mirror.webp",
      alt: "LG ARTCOOL airconditioner"
    },
    premium: {
      standard: "/images/rac-eu-lg-premium.webp",
      alt: "LG Premium airconditioner"
    },
    standard: {
      plus: "/images/rac-eu-standard-plus.webp",
      alt: "LG Standard Plus airconditioner"
    }
  }
} as const;

export type ProductImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: string;
  highlight?: string;
};

export const productImages: ProductImage[] = [
  {
    src: "/images/lg-artcool-mirror.webp",
    alt: "LG ARTCOOL Mirror",
    title: "LG ARTCOOL Mirror",
    description: "Stijlvol design met verwisselbare frontpanelen",
    price: "Vanaf €2.299,-",
    highlight: "Meest stijlvolle model"
  },
  {
    src: "/images/rac-eu-lg-artcool-black.webp",
    alt: "LG ARTCOOL Black",
    title: "LG ARTCOOL Black",
    description: "Stijlvol zwart design met geavanceerde functies",
    price: "Vanaf €2.099,-"
  },
  {
    src: "/images/rac-eu-lg-premium.webp",
    alt: "LG Premium",
    title: "LG Premium",
    description: "Premium prestaties met maximaal comfort",
    price: "Vanaf €1.899,-"
  },
  {
    src: "/images/rac-eu-standard-plus.webp",
    alt: "LG Standard Plus",
    title: "LG Standard Plus",
    description: "Voordelige kwaliteitsairco",
    price: "Vanaf €1.499,-",
    highlight: "Beste prijs-kwaliteit"
  }
];