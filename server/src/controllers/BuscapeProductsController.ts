import { FastifyRequest } from "fastify";
import { BuscapeProductsService } from "../services";
import { ProductViewModel } from "../viewModels/ProductViewModel";

export class BuscapeProductsController {
  constructor(private service: BuscapeProductsService) { }

  execute = async (request: FastifyRequest) => {
    const { product } = request.params as { product: string };

    const products = await this.service.execute(product);

    return {
      products: products.map(ProductViewModel.toHTTP),
    };
  }
}
