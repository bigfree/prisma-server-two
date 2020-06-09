import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from './generated/prisma-client';
import resolvers from './resolvers';

const prisma = new PrismaClient({
    errorFormat: "pretty"
});

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context: request => ({
        ...request,
        prisma,
    }),
});

server.start(() => console.log('Server is running on http://localhost:4000')).then(r => console.log(r));