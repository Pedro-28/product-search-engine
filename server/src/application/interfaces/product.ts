export interface IProduct {
  id: string;
  description: string;
  category: string;
  price: string;
  imageLink: string;
  website: string;
  websiteLink: string;
};

export type IScrapedData = Omit<IProduct, "id" | "category" | "website">;
