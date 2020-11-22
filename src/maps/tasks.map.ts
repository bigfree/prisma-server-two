import { Authorized } from "type-graphql";
import { ResolverActionsConfig } from "../prisma/generated/type-graphql";

const authorizedArray = [Authorized()];

export const taskActionConfig: ResolverActionsConfig<"Task"> = {
    createTask: authorizedArray,
    updateTask: authorizedArray,
    deleteTask: authorizedArray,
    deleteManyTask: authorizedArray,
    tasks: authorizedArray,
    task: authorizedArray,
    upsertTask: authorizedArray,
    updateManyTask: authorizedArray,
    findFirstTask: authorizedArray,
    aggregateTask: authorizedArray,
};