// images.ts

// Banner parts
import { StaticImageData } from "next/image";
import bannerPart from "./banner part.png";
import banner1 from "./banner1.png";
import banner2LeftPart from "./banner2 leftpart.png";
import banner2RightPart from "./banner2 right part.png";
import bannerpart from "./bannerpart.png";

// Cards
import card1 from "./card 1.png";
import card2 from "./card 2.png";
import card3 from "./card 3.png";
import card2Mid from "./card 2 mid.png";
import cardMid from "./card mid.png";

type Card = {
  src: StaticImageData;
  title: string;
  alt: string;
};

const cards: Card[] = [
  { src: card1, title: "Hoodies & Sweetshirt", alt: "Image of Card 1" },
  { src: card2, title: "Coats & Parkas", alt: "Image of Card 2" },
  { src: card3, title: "Tees& T-Shirt ", alt: "Image of Card 3" },
];

// Groups
import group86 from "./Group 86.png";

// Logos
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
import logo6 from "./logo6.png";

type Logo = {
  src: StaticImageData;
  alt: string;
};

const logos: Logo[] = [
  { src: logo1, alt: "Logo 1" },
  { src: logo2, alt: "Logo 2" },
  { src: logo3, alt: "Logo 3" },
  { src: logo4, alt: "Logo 4" },
  { src: logo5, alt: "Logo 5" },
  { src: logo6, alt: "Logo 6" },
];

export default logos;

// Vectors
import vector8 from "./Vector 8.png";
import vector from "./Vector.png";

// Export all
export {
  cards,
  logos,
  bannerPart,
  banner1,
  banner2LeftPart,
  banner2RightPart,
  bannerpart,
  card2Mid,
  cardMid,
  group86,
  vector8,
  vector,
};
