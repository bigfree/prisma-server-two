import * as TypeGraphQL from "type-graphql";
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver(_of => Task)
export class FindFirstTaskResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async findFirstTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.findFirst(args);
  }
}
