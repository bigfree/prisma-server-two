import * as TypeGraphQL from "type-graphql";
import { DeleteManyWorkspaceArgs } from "./args/DeleteManyWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Workspace)
export class DeleteManyWorkspaceResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyWorkspaceArgs): Promise<BatchPayload> {
    return ctx.prisma.workspace.deleteMany(args);
  }
}
