import * as TypeGraphQL from "type-graphql";
import { FindManyLabelArgs } from "./args/FindManyLabelArgs";
import { Label } from "../../../models/Label";

@TypeGraphQL.Resolver(_of => Label)
export class FindManyLabelResolver {
  @TypeGraphQL.Query(_returns => [Label], {
    nullable: false,
    description: undefined
  })
  async labels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLabelArgs): Promise<Label[]> {
    return ctx.prisma.label.findMany(args);
  }
}
