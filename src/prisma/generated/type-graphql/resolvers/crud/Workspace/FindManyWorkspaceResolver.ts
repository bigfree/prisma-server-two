import * as TypeGraphQL from "type-graphql";
import { FindManyWorkspaceArgs } from "./args/FindManyWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class FindManyWorkspaceResolver {
  @TypeGraphQL.Query(_returns => [Workspace], {
    nullable: false,
    description: undefined
  })
  async workspaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyWorkspaceArgs): Promise<Workspace[]> {
    return ctx.prisma.workspace.findMany(args);
  }
}
