import * as TypeGraphQL from "type-graphql";
import { DeleteWorkspaceArgs } from "./args/DeleteWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class DeleteWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async deleteWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.delete(args);
  }
}
