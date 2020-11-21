import { PrismaClient } from "@prisma/client";

export interface Context {
    user: string | boolean;
    prisma: PrismaClient;
}