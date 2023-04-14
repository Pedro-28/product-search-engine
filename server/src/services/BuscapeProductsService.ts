import { IScraper } from "../interfaces/scraper";

export class BuscapeProductsService {
  constructor(private scraper: IScraper) { }
  async execute(category: string) {
    const scrapedData = await this.scraper.execute(category);
    return scrapedData;
  }
}
