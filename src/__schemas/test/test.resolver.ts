import { Arg, Ctx, Query, Resolver } from "type-graphql";
import Test from "./test";
import { PrismaClient } from "../../prisma/client";
import { FindOneTestArgs } from "./test.filters";

@Resolver(() => Test)
export default class TestResolver {

    @Query(() => Test, { nullable: true, description: "Test detail" })
    async test(
        @Arg("input") findOneTestArgs: FindOneTestArgs,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Test | null> {
        try {
            return await prisma.test.findOne({...findOneTestArgs});
        } catch (err) {
            throw new Error(err);
        }
    }
}