import Fastify from "fastify";
import { CategoriesRoute, ProductsRoute } from "./infra/http/routes";

const app = Fastify();

app.register(new CategoriesRoute().routes);
app.register(new ProductsRoute().routes);

app.listen({
  port: 3333,
}).then(() => console.log("Server running"));
