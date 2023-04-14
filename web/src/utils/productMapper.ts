import { IProduct } from "../interfaces/product";

export function productMapper(product: any): IProduct {
  return {
    id: product.id,
    img: product.thumbnail,
    name: product.title,
    description: "",
    category: product.category_id,
    price: product.price,
    url: product.permalink,
  }
}