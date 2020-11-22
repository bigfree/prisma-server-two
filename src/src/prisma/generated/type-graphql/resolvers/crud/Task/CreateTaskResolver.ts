import * as TypeGraphQL from "type-graphql";
import { CreateTaskArgs } from "./args/CreateTaskArgs";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver(_of => Task)
export class CreateTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false,
    description: undefined
  })
  async createTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTaskArgs): Promise<Task> {
    return ctx.prisma.task.create(args);
  }
}
