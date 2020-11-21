import * as TypeGraphQL from "type-graphql";
import { UpsertWorkspaceArgs } from "./args/UpsertWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class UpsertWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: false,
    description: undefined
  })
  async upsertWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertWorkspaceArgs): Promise<Workspace> {
    return ctx.prisma.workspace.upsert(args);
  }
}
