import { ProductsRepository } from "../repositories/ProductsRepository";
import { IScraper } from "../interfaces/scraper";
import { Product } from "../domain/Product";

export class MercadoLivreCategoriesService {
  constructor(private productsRepository: ProductsRepository, private scraper: IScraper) { }
  async execute(category: string) {
    let products = await this.productsRepository.findManyByCategoryAndWebsite(category, "Mercado Livre");

    if (!products.length) {
      const scrapedData = await this.scraper.execute(category);

      products = scrapedData.map((data) => new Product({ ...data, website: "Mercado Livre", category }));

      await this.productsRepository.createMany(products);
    }

    return products;
  }
}
