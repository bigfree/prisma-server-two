import { Authorized } from "type-graphql";
import { ResolverActionsConfig } from "../../prisma/generated/type-graphql";

const authorizedArray = [Authorized()];

export const userActionConfig: ResolverActionsConfig<"User"> = {
    createUser: authorizedArray,
    updateUser: authorizedArray,
    deleteUser: authorizedArray,
    deleteManyUser: authorizedArray,
    users: authorizedArray,
    user: authorizedArray,
    upsertUser: authorizedArray,
    updateManyUser: authorizedArray,
    findFirstUser: authorizedArray,
    aggregateUser: authorizedArray,
};