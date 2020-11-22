import * as TypeGraphQL from "type-graphql";
import { Label } from "../../../models/Label";
import { Task } from "../../../models/Task";
import { LabelTasksArgs } from "./args/LabelTasksArgs";

@TypeGraphQL.Resolver(_of => Label)
export class LabelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: true,
    description: undefined,
  })
  async tasks(@TypeGraphQL.Root() label: Label, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LabelTasksArgs): Promise<Task[] | null> {
    return ctx.prisma.label.findOne({
      where: {
        id: label.id,
      },
    }).tasks(args);
  }
}
