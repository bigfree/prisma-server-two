import * as TypeGraphQL from "type-graphql";
import { DeleteManyLabelArgs } from "./args/DeleteManyLabelArgs";
import { Label } from "../../../models/Label";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Label)
export class DeleteManyLabelResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLabelArgs): Promise<BatchPayload> {
    return ctx.prisma.label.deleteMany(args);
  }
}
