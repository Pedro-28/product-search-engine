import { FastifyReply, FastifyRequest } from "fastify";
import { BuscapeProductsService } from "../../../application/services";
import { ProductViewModel } from "../viewModels/ProductViewModel";

export class BuscapeProductsController {
  constructor(private service: BuscapeProductsService) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { product } = request.params as { product: string };

      const products = await this.service.execute(product);

      return {
        products: products.map(ProductViewModel.toHTTP),
      };
    } catch (error) {
      reply.code(500).send("Internal error");
    }
  }
}
