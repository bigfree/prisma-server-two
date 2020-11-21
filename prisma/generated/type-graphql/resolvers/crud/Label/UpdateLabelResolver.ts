import * as TypeGraphQL from "type-graphql";
import { UpdateLabelArgs } from "./args/UpdateLabelArgs";
import { Label } from "../../../models/Label";

@TypeGraphQL.Resolver(_of => Label)
export class UpdateLabelResolver {
  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async updateLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.update(args);
  }
}
