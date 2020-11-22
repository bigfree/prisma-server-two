import * as TypeGraphQL from "type-graphql";
import { Label } from "../../../models/Label";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { TaskLabelsArgs } from "./args/TaskLabelsArgs";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async user(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.task.findOne({
      where: {
        id: task.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Label], {
    nullable: true,
    description: undefined,
  })
  async labels(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskLabelsArgs): Promise<Label[] | null> {
    return ctx.prisma.task.findOne({
      where: {
        id: task.id,
      },
    }).labels(args);
  }
}
