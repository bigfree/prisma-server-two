import * as TypeGraphQL from "type-graphql";
import { UpsertTaskArgs } from "./args/UpsertTaskArgs";
import { Task } from "../../../models/Task";

@TypeGraphQL.Resolver(_of => Task)
export class UpsertTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false,
    description: undefined
  })
  async upsertTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTaskArgs): Promise<Task> {
    return ctx.prisma.task.upsert(args);
  }
}
