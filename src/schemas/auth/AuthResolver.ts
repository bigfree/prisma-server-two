import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { PrismaClient, User as PrismaUser } from "../../prisma/client";

import AuthInput from "./AuthInput";
import Auth from "./Auth";
import { AuthInterfacePayload } from "./AuthInterface";

@Resolver(of => Auth)
export default class {
    private APP_ENV: string = 'das|56da6?3243562#';

    /**
     * Registracia uzivatela
     * @param signUpInput
     * @param prisma
     */
    @Mutation(returns => Auth)
    async signup(
        @Arg("input") signUpInput: AuthInput,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<AuthInterfacePayload> {

        const password: string = await hash(signUpInput.password, 10);
        const user: PrismaUser = await prisma.user.create({ data: { ...signUpInput, password } });
        const token: string = sign({ userId: user.id }, this.APP_ENV);

        return {
            success: true,
            token,
            user
        }
    }

    /**
     * Prihlasenie uzivatela
     * @param email
     * @param password
     * @param prisma
     */
    @Mutation(returns => Auth)
    async login(
        @Arg("input") { email, password }: AuthInput,
        @Ctx("prisma") prisma: PrismaClient
    ): Promise<AuthInterfacePayload> {

        const user: PrismaUser | null = await prisma.user.findOne({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error(`No such user found for email: ${email}`);
        }

        const valid = await compare(password, user.password);
        if (!valid) {
            throw new Error(`Invalid password`);
        }

        const token = sign({ userId: user.id }, this.APP_ENV);

        return {
            success: true,
            token,
            user
        }
    }
}