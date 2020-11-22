import * as TypeGraphQL from "type-graphql";
import { CreateLabelArgs } from "./args/CreateLabelArgs";
import { Label } from "../../../models/Label";

@TypeGraphQL.Resolver(_of => Label)
export class CreateLabelResolver {
  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: false,
    description: undefined
  })
  async createLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLabelArgs): Promise<Label> {
    return ctx.prisma.label.create(args);
  }
}
