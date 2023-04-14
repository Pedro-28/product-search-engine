import Fastify from "fastify";
import { ProductsRoute } from "./routes";

const app = Fastify();

app.register(new ProductsRoute().routes);

app.listen({
  port: 3333,
}).then(() => console.log("Server running"));
