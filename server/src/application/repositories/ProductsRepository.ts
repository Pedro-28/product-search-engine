import { Product } from "../domain/Product";

export interface ProductsRepository {
  createMany(products: Product[]): Promise<void>;
  findManyByCategoryAndWebsite(category: string, website: string): Promise<Product[]>;
}
