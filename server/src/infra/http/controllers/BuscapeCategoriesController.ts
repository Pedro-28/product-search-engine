import { FastifyReply, FastifyRequest } from "fastify";
import { BuscapeCategoriesService } from "@application/services";
import { ProductViewModel } from "../viewModels/ProductViewModel";

export class BuscapeCategoriesController {
  constructor(private service: BuscapeCategoriesService) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { category } = request.params as { category: string };

      const products = await this.service.execute(category);

      return {
        products: products.map(ProductViewModel.toHTTP),
      };
    } catch (error) {
      reply.code(500).send("Internal error");
    }
  }
}
