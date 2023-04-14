import { Product } from "../domain/Product";

export interface ProductsRepository {
  createMany(product: Product[]): Promise<void>;
  findManyByCategoryAndWebsite(category: string, website?: string): Promise<Product[]>;
}
