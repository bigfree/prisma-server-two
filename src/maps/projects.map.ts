import { Authorized } from "type-graphql";
import { ResolverActionsConfig } from "../prisma/generated/type-graphql";

const authorizedArray = [Authorized()];

export const projectActionConfig: ResolverActionsConfig<"Project"> = {
    createProject: authorizedArray,
    updateProject: authorizedArray,
    deleteProject: authorizedArray,
    deleteManyProject: authorizedArray,
    projects: authorizedArray,
    project: authorizedArray,
    upsertProject: authorizedArray,
    updateManyProject: authorizedArray,
    findFirstProject: authorizedArray,
    aggregateProject: authorizedArray,
};