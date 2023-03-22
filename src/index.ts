import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return `Hello, ${process.env.GREETING_NAME}`;
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Started server at ${address}`);
})
