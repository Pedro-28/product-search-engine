import { FastifyRequest } from "fastify";
import { MercadoLivreCategoriesService } from "../services";

export class MercadoLivreCategoriesController {
  constructor(private service: MercadoLivreCategoriesService) { }

  execute = async (request: FastifyRequest) => {
    const { category } = request.params as { category: string };

    const products = await this.service.execute(category);

    return products;
  }
}
