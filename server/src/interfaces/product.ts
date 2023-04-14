export interface IProduct {
  id: string;
  description: string;
  category: string;
  price: string;
  imageLink: string;
  webSite: string;
  webSiteLink: string;
};

export type IScrapedData = Omit<IProduct, "id" | "category" | "webSite">;
