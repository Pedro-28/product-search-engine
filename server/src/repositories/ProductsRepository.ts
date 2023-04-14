import { Product } from "../domain/Product";

export interface ProductsRepository {
  createMany(products: Product[]): Promise<void>;
  findManyByCategoryAndwebsite(category: string, website?: string): Promise<Product[]>;
}
