import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import Auth from "./Auth";
import AuthInput from "./AuthInput";
import { AuthInterfacePayload } from "./AuthInterface";
import { Context } from "../../interface/apolloserver.context.interface";


@Resolver(of => Auth)
export class CustomAuthResolver {
    private APP_ENV: string = 'das|56da6?3243562#';

    @Mutation(returns => Auth)
    async signup(
        @Arg("data") signUpInput: AuthInput,
        @Ctx() { prisma }: Context,
    ): Promise<AuthInterfacePayload> {
        console.log(signUpInput);

        const password = await hash(signUpInput.password, 10);
        const user = await prisma.user.create({ data: { ...signUpInput, password } });
        const token = sign({ userId: user.id }, this.APP_ENV);

        return {
            token,
            user
        }
    }

    @Mutation(returns => Auth)
    async login(
        @Arg("data") { email, password }: AuthInput,
        @Ctx() { prisma }: Context,
    ): Promise<AuthInterfacePayload> {

        const user = await prisma.user.findOne({
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
            token,
            user
        }
    }
}