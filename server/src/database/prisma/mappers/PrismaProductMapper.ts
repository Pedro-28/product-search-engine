import { Product as RawProduct } from "@prisma/client";

import { Product } from "../../../domain/Product";

export class PrismaProductMapper {
  static toPrisma(product: Product) {
    return {
      id: product.id,
      description: product.description,
      category: product.category,
      price: product.price,
      image_link: product.imageLink,
      website: product.website,
      website_link: product.websiteLink,
    };
  }

  static toDomain(raw: RawProduct): Product {
    return new Product({
      id: raw.id,
      description: raw.description,
      category: raw.category,
      price: raw.price,
      imageLink: raw.image_link,
      website: raw.website,
      websiteLink: raw.website_link,
    });
  }
}
