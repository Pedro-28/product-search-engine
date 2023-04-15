import { PrismaClient } from "@prisma/client";

import { ProductsRepository } from "@application/repositories/ProductsRepository";
import { Product } from "@application/domain/Product";
import { PrismaProductMapper } from "../mappers/PrismaProductMapper";

export class PrismaProductsRepository implements ProductsRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createMany(products: Product[]): Promise<void> {
    await this.prisma.product.createMany({
      data: products.map(PrismaProductMapper.toPrisma),
    });
  }

  async findManyByCategoryAndWebsite(
    category: string,
    website: string
  ): Promise<Product[]> {
    const dbProducts = await this.prisma.product.findMany({
      where: { category, website }
    });

    return dbProducts.map(PrismaProductMapper.toDomain);
  }
}