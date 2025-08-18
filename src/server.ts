import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from "@fastify/multipart";
import { fastify } from "fastify";
import { healthCheckRoute } from "./routes/health-check";
import { uploadImageRoute } from "./routes/upload-image";
import { log } from "./infra/logger";
import secret from "./infra/secret";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
});

server.register(fastifyMultipart);
server.register(uploadImageRoute);
server.register(healthCheckRoute);

server.listen({ port: 3333, host: "0.0.0.0" }).then(async () => {
  await secret.read("/secret/data/widget-server-stg");
  log.info("HTTP server running!");
});
