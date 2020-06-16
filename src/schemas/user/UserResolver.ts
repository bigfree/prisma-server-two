import { Arg, Authorized, Ctx, Query, Resolver } from "type-graphql";
import User from "./User";
import { PrismaClient, TaskGetPayload, UserGetPayload } from "../../prisma/client";
import UserInput from "./UserInput";

@Resolver(of => User)
export default class {

    /**
     * Vypis uzivatela
     * @param id
     * @param prisma
     */
    @Query(returns => User)
    @Authorized()
    async user(
        @Arg("filter") { id }: UserInput,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<(User & { tasks: Array<TaskGetPayload<{ tasks: boolean }["tasks"]>> }) | null> {
        try {
            return await prisma.user.findOne({
                where: {
                    id
                },
                include: {
                    tasks: true
                }
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Vypis uzivatelov
     * @param startIndex
     * @param endIndex
     * @param prisma
     */
    @Query(returns => [User])
    @Authorized()
    async users(
        @Arg("filter") { startIndex, endIndex }: UserInput,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<Array<UserGetPayload<{ take: number | undefined; include: { tasks: boolean }; skip: number | undefined }>>> {
        try {
            return await prisma.user.findMany({
                skip: startIndex,
                take: endIndex,
                include: {
                    tasks: true,
                }
            });
        } catch (err) {
            throw new Error(err);
        }
    }
}