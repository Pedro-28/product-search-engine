import { FastifyReply, FastifyRequest } from "fastify";
import { MercadoLivreCategoriesService } from "@application/services";
import { ProductViewModel } from "../viewModels/ProductViewModel";

export class MercadoLivreCategoriesController {
  constructor(private service: MercadoLivreCategoriesService) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { category } = request.params as { category: string };

      const products = await this.service.execute(category);

      return {
        products: products.map(ProductViewModel.toHTTP),
      };
    } catch (error) {
      console.log(error);
      reply.code(500).send("Internal error");
    }
  }
}
