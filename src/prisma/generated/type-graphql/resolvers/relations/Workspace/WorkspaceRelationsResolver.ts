import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class WorkspaceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() workspace: Workspace, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.workspace.findOne({
      where: {
        id: workspace.id,
      },
    }).user({});
  }
}
