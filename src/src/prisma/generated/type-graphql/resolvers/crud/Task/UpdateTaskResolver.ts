import * as TypeGraphQL from "type-graphql";
import { UpdateTaskArgs } from "./args/UpdateTaskArgs";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver(_of => Task)
export class UpdateTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async updateTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.update(args);
  }
}
