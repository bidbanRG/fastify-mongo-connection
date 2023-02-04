import {  FastifyPluginAsync,  RouteShorthandOptions } from "fastify";
import { Static, Type } from '@sinclair/typebox';





const QuerySchema = Type.Object({
	greeting: Type.Optional(Type.String()) 
})

const LoginQuerySchema = Type.Object({
	name: Type.String()
})

const ParamsSchema = Type.Object({
	id: Type.Optional(Type.Number())
})


const ResponseSchema =  Type.Array( Type.Required(
     
        Type.Object({
        _id:Type.String(),    
		name:Type.String(),
        password:Type.String(),
        imgUrl:Type.String()
     })
   )     
)
const UploadBodySchema = Type.Object({
	file:Type.Any()
	  	
	
})


type Query = Static<typeof QuerySchema>;
type Params = Static<typeof ParamsSchema>;
type LoginQuery = Static<typeof LoginQuerySchema>;
type UploadFile = Static<typeof UploadBodySchema>;


interface UserRequest{
	Querystring:Query;
	Params:Params;
}

interface LoginRequest{
	Querystring:LoginQuery
}

interface UploadFileBody{
	Body:UploadFile
}

const userController:FastifyPluginAsync = async (fastify,opts):Promise<void> => {
  
  const UserReqOpts:RouteShorthandOptions = {
      schema:{
         response:{200:ResponseSchema},
         querystring:QuerySchema,
         params:ParamsSchema
         
      }
  }

  const LoginReqOpts:RouteShorthandOptions = {
  	schema:{
  		querystring:LoginQuerySchema,
  		response:{200:ResponseSchema}
  	}
  }  

  const Upload:RouteShorthandOptions = {
  	 schema:{body:UploadBodySchema} 
  }
    // fastify.addHook<UserRequest>('onRequest',(request,reply,done) => {
        
    //      if(request.query.greeting !== 'Hemlo' && request.url.includes('/user?greeting'))
    //      	reply.send({name:`${request.query.greeting} is not valid`});

    //      done();
    // }); 
    
    fastify.get<UserRequest>('/user',UserReqOpts,async (request,reply) => {

      
        interface UserSchema{
            _id:String;
            name:String;
            password:String;
            imgUrl:String;
        }
       const users = await fastify.mongo.db?.collection<UserSchema>('users').find({},{
          limit:5
        }).toArray();


      
        reply.status(200).send(users);

    });
   
    fastify.get<LoginRequest>('/login',LoginReqOpts,(request,reply) => {
         reply.status(200).send({name:request.query.name});
    });

    fastify.post<UploadFileBody>('/upload',Upload,(request,reply) => {
         reply.send('done');        
    });



}
export default userController;