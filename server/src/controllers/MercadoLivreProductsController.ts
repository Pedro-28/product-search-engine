import { FastifyRequest } from "fastify";
import { MercadoLivreProductsService } from "../services";
import { ProductViewModel } from "../viewModels/ProductViewModel";

export class MercadoLivreProductsController {
  constructor(private service: MercadoLivreProductsService) { }

  execute = async (request: FastifyRequest) => {
    const { product } = request.params as { product: string };

    const products = await this.service.execute(product);

    return {
      products: products.map(ProductViewModel.toHTTP),
    };
  }
}
