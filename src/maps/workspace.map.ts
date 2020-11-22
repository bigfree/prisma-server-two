import { Authorized } from "type-graphql";
import { ResolverActionsConfig } from "../prisma/generated/type-graphql";

const authorizedArray = [Authorized()];

export const workspaceActionConfig: ResolverActionsConfig<"Workspace"> = {
    createWorkspace: authorizedArray,
    updateWorkspace: authorizedArray,
    deleteWorkspace: authorizedArray,
    deleteManyWorkspace: authorizedArray,
    workspaces: authorizedArray,
    workspace: authorizedArray,
    upsertWorkspace: authorizedArray,
    updateManyWorkspace: authorizedArray,
    findFirstWorkspace: authorizedArray,
    aggregateWorkspace: authorizedArray,
};