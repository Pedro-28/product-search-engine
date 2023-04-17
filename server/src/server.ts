import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { CategoriesRoute, ProductsRoute } from "@infra/http/routes";

const { ORIGIN_URL, PORT } = process.env;

const app = Fastify();

app.register(cors, {
  origin: ORIGIN_URL,
});

app.register(new CategoriesRoute().routes);
app.register(new ProductsRoute().routes);

app.listen({
  port: Number(PORT),
}).then(() => console.log("Server running"));
