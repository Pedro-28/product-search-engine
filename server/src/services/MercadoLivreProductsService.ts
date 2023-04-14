import { Product } from "../domain/Product";
import { IScraper } from "../interfaces/scraper";

export class MercadoLivreProductsService {
  constructor(private scraper: IScraper) { }
  async execute(product: string) {
    const scrapedData = await this.scraper.execute(product);

    const products = scrapedData.map((data) => new Product({ ...data, webSite: "Mercado Livre" }));

    return products;
  }
}
