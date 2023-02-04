import { FastifyPluginAsync } from 'fastify'
import { chatController } from './chat';
import example from './example';
import userController from './user/userController';


const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

   fastify.register(example);
   fastify.register(userController);
   fastify.register(chatController);
  

  fastify.get('/', async function (request, reply) {
     return { root: "hello" }
  })

}

export default root;
