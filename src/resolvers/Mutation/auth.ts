// import { Context } from '../../utils';
//
// import { hash, compare } from 'bcryptjs';
// import { sign } from 'jsonwebtoken';
//
// import { User } from '../../generated/prisma-client';
//
// const APP_ENV = 'das|56da6?3243562#';
//
// export const auth = {
//
//     /**
//      * Vytvorenie uzivatela
//      * @param parent
//      * @param args
//      * @param ctx
//      */
//     async signup(parent, { input }, ctx: Context) {
//
//         const password = await hash(input.password, 10);
//         const user: User = await ctx.prisma.user.create({ data: {...input, password }});
//         const token = sign({userId: user.id}, APP_ENV);
//
//         return {
//             message: "OK",
//             success: true,
//             token,
//             user
//         }
//     },
//
//     /**
//      * Prihlasenie uzivatela
//      * @param parent
//      * @param input
//      * @param ctx
//      */
//     async login(parent, { input }, ctx: Context) {
//
//         const { email, password } = input;
//
//         const user: User = await ctx.prisma.user.findOne({
//             where: { email }
//         });
//
//         if (!user) {
//             throw new Error(`No such user found for email: ${email}`);
//         }
//
//         const valid = await compare(password, user.password);
//
//         if (!valid) {
//             throw new Error(`Invalid password`);
//         }
//
//         const token = sign({ userId: user.id }, APP_ENV)
//
//         return {
//             message: "OK",
//             success: true,
//             token,
//             user
//         }
//     }
// }