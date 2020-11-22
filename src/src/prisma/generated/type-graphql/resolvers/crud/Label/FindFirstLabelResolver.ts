import * as TypeGraphQL from "type-graphql";
import { FindFirstLabelArgs } from "./args/FindFirstLabelArgs";
import { Label } from "../../../models/Label";

@TypeGraphQL.Resolver(_of => Label)
export class FindFirstLabelResolver {
  @TypeGraphQL.Query(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async findFirstLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.findFirst(args);
  }
}
