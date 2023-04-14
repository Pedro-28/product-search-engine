import { FastifyRequest } from "fastify";
import { BuscapeProductsService } from "../services/BuscapeProductsService";

export class BuscapeProductsController {
  constructor(private service: BuscapeProductsService) { }

  async get(request: FastifyRequest) {
    const { category } = request.params as { category: string };

    const products = await this.service.execute(category);

    return products;
  }
}
