import { FastifyInstance } from "fastify";

import { MercadoLivreScraper } from "../scrapers/MercadoLivreScraper";
import { BuscapeScraper } from "../scrapers/BuscapeScraper";
import { MercadoLivreCategoriesService, BuscapeCategoriesService } from "@application/services";
import { MercadoLivreCategoriesController, BuscapeCategoriesController } from "../controllers";
import { PrismaProductsRepository } from "../../database/prisma/repositories/PrismaProductsRepository";

export class CategoriesRoute {
  async routes(app: FastifyInstance) {
    const mercadoLivreScraper = new MercadoLivreScraper();
    const buscapeScraper = new BuscapeScraper();

    const prismaProductsRepository = new PrismaProductsRepository();

    const mercadoLivreCategoriesService = new MercadoLivreCategoriesService(prismaProductsRepository, mercadoLivreScraper);
    const buscapeCategoriesService = new BuscapeCategoriesService(prismaProductsRepository, buscapeScraper);

    const mercadoLivreCategoriesController = new MercadoLivreCategoriesController(mercadoLivreCategoriesService);
    const buscapeCategoriesController = new BuscapeCategoriesController(buscapeCategoriesService);

    app.get("/category/:category/mercadolivre", mercadoLivreCategoriesController.execute);
    app.get("/category/:category/buscape", buscapeCategoriesController.execute);
  }
}
