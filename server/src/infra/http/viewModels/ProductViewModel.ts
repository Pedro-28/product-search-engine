import { Product } from "../../../application/domain/Product";

export class ProductViewModel {
  static toHTTP(product: Product) {
    return {
      id: product.id,
      description: product.description,
      category: product.category,
      price: product.price,
      imageLink: product.imageLink,
      website: product.website,
      websiteLink: product.websiteLink,
    };
  }
}
