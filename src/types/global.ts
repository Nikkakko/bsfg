export type FooterLink = {
  name: string;
  href: string;
  image?: string;
};

export type Game = {
  id: number;
  name: string;
  provider: string;
  identifier: string;
  type: number;
  demo: number;
  image: string;
  categories: string[];
};
