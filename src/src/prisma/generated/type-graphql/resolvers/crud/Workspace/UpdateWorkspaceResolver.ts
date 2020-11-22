import * as TypeGraphQL from "type-graphql";
import { UpdateWorkspaceArgs } from "./args/UpdateWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class UpdateWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async updateWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.update(args);
  }
}
