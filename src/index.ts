import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";

import * as path from "path";

import { CustomAuthResolver } from "./schemas/auth/AuthResolver"
import {
    LabelCrudResolver,
    LabelRelationsResolver,
    TaskCrudResolver,
    TaskRelationsResolver,
    UserCrudResolver,
    UserRelationsResolver
} from "../prisma/generated/type-graphql";

export interface Context {
    prisma: PrismaClient;
}

async function main() {
    const schema = await buildSchema({
        resolvers: [
            CustomAuthResolver,
            UserRelationsResolver,
            TaskRelationsResolver,
            LabelRelationsResolver,
            UserCrudResolver,
            TaskCrudResolver,
            LabelCrudResolver
        ],
        emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
        dateScalarMode: "isoDate",
        validate: false,
    });

    const prisma = new PrismaClient({
        errorFormat: "minimal",
        log: ["query", "warn", "error", "info"],
    });

    const server = new ApolloServer({
        schema,
        playground: true,
        tracing: true,
        cors: true,
        context: (): Context => ({ prisma }),
    });

    const { port } = await server.listen(4000);
    console.log(`🚀 Server ready at ${port}`);
}

main().catch(console.error);