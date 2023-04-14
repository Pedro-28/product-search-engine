import { FastifyRequest } from "fastify";
import { BuscapeCategoriesService } from "../services";

export class BuscapeCategoriesController {
  constructor(private service: BuscapeCategoriesService) { }

  execute = async (request: FastifyRequest) => {
    const { category } = request.params as { category: string };

    const products = await this.service.execute(category);

    return products;
  }
}
