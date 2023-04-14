import { IScrapedData } from "./product";

export interface IScraper {
  execute(category: string): Promise<IScrapedData[]>;
};
