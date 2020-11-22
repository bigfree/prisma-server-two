import * as TypeGraphQL from "type-graphql";
import { FindFirstWorkspaceArgs } from "./args/FindFirstWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindFirstWorkspaceResolver {
  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async findFirstWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.findFirst(args);
  }
}
