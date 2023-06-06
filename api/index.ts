import appRoot from '../src/app'

import Fastify, { FastifyReply, FastifyRequest } from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
  logger: true
});

// Register your application as a normal plugin.
app.register(appRoot);

module.exports = async (req:FastifyRequest, res:FastifyReply) => {
  await app.ready();
  app.server.emit("request", req, res);
};



module.exports = app;
// Register your application as a normal plugin.