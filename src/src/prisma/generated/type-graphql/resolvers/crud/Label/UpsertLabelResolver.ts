import * as TypeGraphQL from "type-graphql";
import { UpsertLabelArgs } from "./args/UpsertLabelArgs";
import { Label } from "../../../models/Label";

@TypeGraphQL.Resolver(_of => Label)
export class UpsertLabelResolver {
  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: false,
    description: undefined
  })
  async upsertLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLabelArgs): Promise<Label> {
    return ctx.prisma.label.upsert(args);
  }
}
