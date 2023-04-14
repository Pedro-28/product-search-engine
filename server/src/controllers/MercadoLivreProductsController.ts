import { FastifyRequest } from "fastify";
import { MercadoLivreProductsService } from "../services/MercadoLivreProductsService";

export class MercadoLivreProductsController {
  constructor(private service: MercadoLivreProductsService) { }

  execute = async (request: FastifyRequest) => {
    const { category } = request.params as { category: string };

    const products = await this.service.execute(category);

    return products;
  }
}
