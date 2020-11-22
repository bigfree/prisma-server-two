import * as TypeGraphQL from "type-graphql";
import { DeleteLabelArgs } from "./args/DeleteLabelArgs";
import { Label } from "../../../models/Label";

@TypeGraphQL.Resolver(_of => Label)
export class DeleteLabelResolver {
  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async deleteLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.delete(args);
  }
}
