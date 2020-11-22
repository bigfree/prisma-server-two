import * as TypeGraphQL from "type-graphql";
import { FindOneLabelArgs } from "./args/FindOneLabelArgs";
import { Label } from "../../../models/Label";

@TypeGraphQL.Resolver(_of => Label)
export class FindOneLabelResolver {
  @TypeGraphQL.Query(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async label(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.findOne(args);
  }
}
