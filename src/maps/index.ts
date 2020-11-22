import { ResolversEnhanceMap } from "../prisma/generated/type-graphql";
import { labelActionConfig } from "./labels.map";
import { taskActionConfig } from "./tasks.map";
import { userActionConfig } from "./users.map";
import { workspaceActionConfig } from "./workspace.map";

export const resolversEnhanceMap: ResolversEnhanceMap = {
    User: userActionConfig,
    Task: taskActionConfig,
    Label: labelActionConfig,
    Workspace: workspaceActionConfig,
}