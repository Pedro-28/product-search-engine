import { FastifyInstance } from "fastify";
import { MercadoLivreScraper } from "../scrapers/MercadoLivreScraper";
import { BuscapeScraper } from "../scrapers/BuscapeScraper";
import { MercadoLivreCategoriesService, BuscapeCategoriesService } from "../services";
import { MercadoLivreCategoriesController, BuscapeCategoriesController } from "../controllers";

export class CategoriesRoute {
  async routes(app: FastifyInstance) {
    const mercadoLivreScraper = new MercadoLivreScraper();
    const buscapeScraper = new BuscapeScraper();

    const mercadoLivreCategoriesService = new MercadoLivreCategoriesService(mercadoLivreScraper);
    const buscapeCategoriesService = new BuscapeCategoriesService(buscapeScraper);

    const mercadoLivreCategoriesController = new MercadoLivreCategoriesController(mercadoLivreCategoriesService);
    const buscapeCategoriesController = new BuscapeCategoriesController(buscapeCategoriesService);

    app.get("/category/:category/mercadolivre", mercadoLivreCategoriesController.execute);
    app.get("/category/:category/buscape", buscapeCategoriesController.execute);
  }
}
