import * as TypeGraphQL from "type-graphql";
import { UpdateManyLabelArgs } from "./args/UpdateManyLabelArgs";
import { Label } from "../../../models/Label";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Label)
export class UpdateManyLabelResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLabelArgs): Promise<BatchPayload> {
    return ctx.prisma.label.updateMany(args);
  }
}
