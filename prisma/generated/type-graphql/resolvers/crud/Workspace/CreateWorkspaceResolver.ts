import * as TypeGraphQL from "type-graphql";
import { CreateWorkspaceArgs } from "./args/CreateWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class CreateWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: false,
    description: undefined
  })
  async createWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateWorkspaceArgs): Promise<Workspace> {
    return ctx.prisma.workspace.create(args);
  }
}
