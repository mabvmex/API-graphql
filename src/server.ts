// console.log('Hola Mundo desde Academia Online - GRAPHQL!!!');

import { ApolloServer } from 'apollo-server-express'
import express from 'express';
import compression from 'compression'
import cors from 'cors';
import expressPlayground from 'graphql-playground-middleware-express'
import { createServer } from 'http';
import schema from './schema';

const app = express();
app.use('*', cors());
app.use(compression());

const servidor = new ApolloServer ({
    schema,
    introspection: true
});

servidor.applyMiddleware({app});
app.get('/', expressPlayground ({
    endpoint: '/graphql'
}));

const httpServer = createServer(app);
const PORT = 5300;

httpServer.listen(
    {
        port: PORT
    }, 
    () => console.log (`El servidor "Academia Online" está listo en http://localhost:${PORT}`)
    );