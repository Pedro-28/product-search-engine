import { Product } from "../domain/Product";

export class ProductViewModel {
  static toHTTP(product: Product) {
    return {
      id: product.id,
      description: product.description,
      category: product.category,
      price: product.price,
      imageLink: product.imageLink,
      webSite: product.webSite,
      webSiteLink: product.webSiteLink,
    };
  }
}
