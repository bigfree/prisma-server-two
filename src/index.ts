import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";
import path from "path";
import "reflect-metadata";
import { buildSchema } from 'type-graphql';
import { authChecker, getUser } from './AuthChecker';
import { Context } from "./interface/apolloserver.context.interface";
import { resolversEnhanceMap } from "./maps";
import {
    applyResolversEnhanceMap,
    LabelCrudResolver,
    LabelRelationsResolver,
    ProjectCrudResolver,
    ProjectRelationsResolver,
    TaskCrudResolver,
    TaskRelationsResolver,
    UserCrudResolver,
    UserRelationsResolver,
    WorkspaceCrudResolver,
    WorkspaceRelationsResolver
} from "./prisma/generated/type-graphql";
import { CustomAuthResolver } from "./schemas/auth/AuthResolver"

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
            LabelCrudResolver,
            WorkspaceCrudResolver,
            WorkspaceRelationsResolver,
            ProjectCrudResolver,
            ProjectRelationsResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
        dateScalarMode: "isoDate",
        validate: false,
        authChecker
    });

    const prisma: any = new PrismaClient({
        errorFormat: "minimal",
        log: ["query", "warn", "error", "info"],
    });

    const server: ApolloServer = new ApolloServer({
        schema,
        playground: true,
        tracing: true,
        introspection: true,
        cors: true,
        context: ({req}): Context => {
            const token = req.headers.authorization || null;
            const user = getUser(token);
            return {user, prisma};
        },
    });

    const {port} = await server.listen(process.env.PORT || 4000);
    console.log(`🚀 Server ready at ${port}`);
}

main().catch(console.error);