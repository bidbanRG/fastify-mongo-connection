import fileUpload from 'fastify-file-upload';
import fp from 'fastify-plugin';


export default fp(async (fastify) => {
  fastify.register(fileUpload);
})

