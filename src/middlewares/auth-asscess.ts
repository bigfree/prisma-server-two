// import { MiddlewareFn } from "type-graphql";
// import { AuthError } from "../AuthChecker";
//
// @Service()
// export const AuthAccess: MiddlewareFn = async ({ args, context }, next) => {
//     if (context.user) return await next();
//     throw new AuthError();
// }