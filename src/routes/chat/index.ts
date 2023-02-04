import { FastifyPluginAsync } from "fastify"

export const chatController:FastifyPluginAsync = async (fastify,opts) => {
       
    fastify.get('/chat',(request,reply) => {
         
    	return reply.send('chat setup');
        
    });


}