import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import express from "express";
import { GraphQLSchema } from "graphql";
import path from "path";
import "reflect-metadata";
import { Authorized, buildSchema } from 'type-graphql';
import {
    applyResolversEnhanceMap,
    LabelCrudResolver,
    LabelRelationsResolver,
    ResolversEnhanceMap,
    TaskCrudResolver,
    TaskRelationsResolver,
    UserCrudResolver,
    UserRelationsResolver
} from "../prisma/generated/type-graphql";
import { authChecker, getUser } from './AuthChecker';
import { CustomAuthResolver } from "./__schemas/auth/AuthResolver"

export interface Context {
    user: string | boolean;
    prisma: PrismaClient;
}

const resolversEnhanceMap: ResolversEnhanceMap = {
    Task: {
        createTask: [Authorized()],
    }
};

applyResolversEnhanceMap(resolversEnhanceMap);

async function main() {
    const schema: GraphQLSchema = await buildSchema({
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
        authChecker,
    });

    const prisma: any = new PrismaClient({
        errorFormat: "minimal",
        log: ["query", "warn", "error", "info"],
    });

    const server: ApolloServer = new ApolloServer({
        schema,
        playground: true,
        tracing: true,
        cors: true,
        context: ({req}): Context => {
            const token = req.headers.authorization || null;
            const user = getUser(token);
            return {user, prisma};
        },
    });

    const {port} = await server.listen(4000);
    console.log(`🚀 Server ready at ${port}`);
}

main().catch(console.error);