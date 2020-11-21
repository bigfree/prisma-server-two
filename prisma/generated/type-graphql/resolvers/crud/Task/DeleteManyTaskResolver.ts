import * as TypeGraphQL from "type-graphql";
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs";
import { Task } from "../../../models/Task";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Task)
export class DeleteManyTaskResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTaskArgs): Promise<BatchPayload> {
    return ctx.prisma.task.deleteMany(args);
  }
}
