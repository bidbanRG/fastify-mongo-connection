import { FastifyPluginAsync } from "fastify"


const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  

  


   fastify.get('/example:id', async function (request, reply) {
        console.log(request.params);
    return {msg: `this is an example${request.params}`}
  })

}

export default example;
