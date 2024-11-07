export const images = {
  hero: {
    main: "/images/lg-artcool-gallery.webp",
    alt: "LG ARTCOOL Gallery airconditioner in modern interieur"
  },
  products: {
    artcool: {
      gallery: "/images/lg-artcool-gallery.webp",
      mirror: "/images/lg-artcool-mirror.webp",
      alt: "LG ARTCOOL airconditioner"
    },
    dualcool: {
      standard: "/images/lg-dualcool-standard.webp",
      plus: "/images/lg-dualcool-plus.webp",
      alt: "LG DUALCOOL airconditioner"
    },
    standard: {
      plus: "/images/lg-standard-plus.webp",
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
    src: images.products.artcool.gallery,
    alt: "LG ARTCOOL Gallery",
    title: "LG ARTCOOL Gallery",
    description: "Uniek design met verwisselbare frontpanelen",
    price: "Vanaf €2.299,-",
    highlight: "Meest stijlvolle model"
  },
  {
    src: images.products.artcool.mirror,
    alt: "LG ARTCOOL Mirror",
    title: "LG ARTCOOL Mirror",
    description: "Stijlvol spiegelend design",
    price: "Vanaf €2.099,-"
  },
  {
    src: images.products.dualcool.plus,
    alt: "LG DUALCOOL Plus",
    title: "LG DUALCOOL Plus",
    description: "Krachtige prestaties met dubbele inverter",
    price: "Vanaf €1.899,-"
  },
  {
    src: images.products.dualcool.standard,
    alt: "LG DUALCOOL Standard",
    title: "LG DUALCOOL Standard",
    description: "Betrouwbare basis met dubbele inverter",
    price: "Vanaf €1.699,-"
  },
  {
    src: images.products.standard.plus,
    alt: "LG Standard Plus",
    title: "LG Standard Plus",
    description: "Voordelige kwaliteitsairco",
    price: "Vanaf €1.499,-",
    highlight: "Beste prijs-kwaliteit"
  }
];