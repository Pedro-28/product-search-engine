import { PrismaClient } from "@prisma/client";

import { ProductsRepository } from "../../../repositories/ProductsRepository";
import { Product } from "../../../domain/Product";
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

  async findManyByCategoryAndwebsite(
    category: string,
    website?: string | undefined
  ): Promise<Product[]> {
    const dbProducts = await this.prisma.product.findMany({
      where: { category, website }
    });

    return dbProducts.map(PrismaProductMapper.toDomain);
  }
}