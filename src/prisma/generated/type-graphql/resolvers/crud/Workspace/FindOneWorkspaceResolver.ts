import * as TypeGraphQL from "type-graphql";
import { FindOneWorkspaceArgs } from "./args/FindOneWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindOneWorkspaceResolver {
  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async workspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.findOne(args);
  }
}
