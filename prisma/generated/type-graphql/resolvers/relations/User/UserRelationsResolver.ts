import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { UserTasksArgs } from "./args/UserTasksArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: true,
    description: undefined,
  })
  async tasks(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTasksArgs): Promise<Task[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).tasks(args);
  }
}
