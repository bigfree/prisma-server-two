import { Authorized } from "type-graphql";
import { ResolverActionsConfig } from "../prisma/generated/type-graphql";

const authorizedArray = [Authorized()];

export const labelActionConfig: ResolverActionsConfig<"Label"> = {
    createLabel: authorizedArray,
    updateLabel: authorizedArray,
    deleteLabel: authorizedArray,
    deleteManyLabel: authorizedArray,
    labels: authorizedArray,
    label: authorizedArray,
    upsertLabel: authorizedArray,
    updateManyLabel: authorizedArray,
    findFirstLabel: authorizedArray,
    aggregateLabel: authorizedArray,
};