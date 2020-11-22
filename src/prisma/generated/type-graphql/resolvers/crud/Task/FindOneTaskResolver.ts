import * as TypeGraphQL from "type-graphql";
import { FindOneTaskArgs } from "./args/FindOneTaskArgs";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver(_of => Task)
export class FindOneTaskResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async task(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.findOne(args);
  }
}
