"use strict";

// Read the .env file.
// import * as dotenv from "dotenv";
// dotenv.config();

// Require the framework
const Fastify = require("fastify");

// Instantiate Fastify with some config
const app = Fastify();

// Register your application as a normal plugin.
app.register(require("./dist/app.js"));

app.listen({ port: process.env.PORT || 3000 }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }else console.log('listening');
})