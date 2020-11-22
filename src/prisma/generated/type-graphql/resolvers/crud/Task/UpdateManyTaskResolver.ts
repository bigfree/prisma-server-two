import * as TypeGraphQL from "type-graphql";
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs";
import { Task } from "../../../models/Task";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Task)
export class UpdateManyTaskResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTaskArgs): Promise<BatchPayload> {
    return ctx.prisma.task.updateMany(args);
  }
}
