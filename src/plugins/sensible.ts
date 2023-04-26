import fp from 'fastify-plugin'
import sensible, { SensibleOptions } from '@fastify/sensible'
import cors from '@fastify/cors';
 import fastifyMongodb from '@fastify/mongodb';
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<SensibleOptions>(async (fastify) => {
  fastify.register(sensible)
  fastify.register(cors)
  fastify.register(fastifyMongodb,{
      forceClose: true,
      url: ''
  })
})
