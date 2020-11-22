import * as TypeGraphQL from "type-graphql";
import { UpdateManyWorkspaceArgs } from "./args/UpdateManyWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Workspace)
export class UpdateManyWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyWorkspaceArgs): Promise<BatchPayload> {
    return ctx.prisma.workspace.updateMany(args);
  }
}
