import Fastify from 'fastify';
import appRoot from './src/app';
// Instantiate Fastify with some config
const app = Fastify();

app.register(appRoot);

app.listen( { port: 3000 },(err) => {
     
     if(err)
       console.log(err);
     else console.log('running'); 
})


export default app;