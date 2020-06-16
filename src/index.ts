import "reflect-metadata";
// import { GraphQLServer } from "graphql-yoga";
import { ApolloServer, PubSub } from "apollo-server";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "./prisma/client";

import UserResolver from "./schemas/user/UserResolver";
import AuthResolver from "./schemas/auth/AuthResolver";
import TaskResolver from "./schemas/task/TaskResolver";
import LabelResolver from "./schemas/label/LabelResolver";
import TestResolver from "./schemas/test/test.resolver";

import { authChecker, customAuthChecker } from "./AuthChecker";

async function bootstrap() {
    const pubsub = new PubSub();

    const schema = await buildSchema({
        resolvers: [UserResolver, AuthResolver, TaskResolver, LabelResolver, TestResolver],
        emitSchemaFile: true,
        dateScalarMode: "isoDate",
        authChecker: customAuthChecker
    });

    const prisma = new PrismaClient({
        errorFormat: "minimal",
        log: ["query", "warn", "error", "info"],
    });

    const server = new ApolloServer({
        schema,
        tracing: true,
        // cacheControl: true,
        subscriptions: {
            onConnect: async (connectionParams, webSocket, context) => {
                console.log(`Subscription client connect.`)
            },
            onDisconnect: async (webSocket, context) => {
                console.log(`Subscription client disconnected.`)
            }
        },
        context: ({ req, connection }) => {

            if (!req || !req.headers) {
                return {
                    prisma,
                    pubsub
                };
            }

            const token = req.get("Authorization");
            const user = authChecker(token);

            return {
                ...req,
                prisma,
                pubsub,
                user,
            }
        },
        playground: true,
        cors: true,
    });

    // server.start(({ port }) => console.log(`Server is running on http://localhost:${port}`)).then(r => console.log(r));
    const { url, subscriptionsUrl } = await server.listen(4000);
    console.log(`🚀 Server ready at ${url}`);
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
}

bootstrap();