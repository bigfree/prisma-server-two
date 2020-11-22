import * as TypeGraphQL from "type-graphql";
import { DeleteTaskArgs } from "./args/DeleteTaskArgs";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver(_of => Task)
export class DeleteTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async deleteTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.delete(args);
  }
}
