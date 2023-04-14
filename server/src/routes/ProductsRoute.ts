import { FastifyInstance } from "fastify";
import { BuscapeProductsController, MercadoLivreProductsController } from "../controllers";
import { BuscapeScraper } from "../scrapers/BuscapeScraper";
import { MercadoLivreScraper } from "../scrapers/MercadoLivreScraper";
import { BuscapeProductsService, MercadoLivreProductsService } from "../services";

export class ProductsRoute {
  async routes(app: FastifyInstance) {
    const mercadoLivreScraper = new MercadoLivreScraper();
    const buscapeScraper = new BuscapeScraper();

    const mercadoLivreProductsService = new MercadoLivreProductsService(mercadoLivreScraper);
    const buscapeProductsService = new BuscapeProductsService(buscapeScraper);

    const mercadoLivreProductsController = new MercadoLivreProductsController(mercadoLivreProductsService);
    const buscapeProductsController = new BuscapeProductsController(buscapeProductsService);

    app.get("/product/:product/mercadolivre", mercadoLivreProductsController.execute);
    app.get("/product/:product/buscape", buscapeProductsController.execute);
  }
}
