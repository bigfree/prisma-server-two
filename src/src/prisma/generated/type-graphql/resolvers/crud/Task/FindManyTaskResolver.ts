import * as TypeGraphQL from "type-graphql";
import { FindManyTaskArgs } from "./args/FindManyTaskArgs";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver(_of => Task)
export class FindManyTaskResolver {
  @TypeGraphQL.Query(_returns => [Task], {
    nullable: false,
    description: undefined
  })
  async tasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTaskArgs): Promise<Task[]> {
    return ctx.prisma.task.findMany(args);
  }
}
