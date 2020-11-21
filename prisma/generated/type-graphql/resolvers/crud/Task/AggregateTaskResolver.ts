import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";
import { Task } from "../../../models/Task";
import { AggregateTask } from "../../outputs/AggregateTask";

@TypeGraphQL.Resolver(_of => Task)
export class AggregateTaskResolver {
  @TypeGraphQL.Query(_returns => AggregateTask, {
    nullable: false,
    description: undefined
  })
  async aggregateTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskArgs): Promise<AggregateTask> {
    function transformFields(fields: Record<string, any>): Record<string, any> {
      return Object.fromEntries(
        Object.entries(fields)
          .filter(([key, value]) => !key.startsWith("_"))
          .map<[string, any]>(([key, value]) => {
            if (Object.keys(value).length === 0) {
              return [key, true];
            }
            return [key, transformFields(value)];
          }),
      );
    }

    return ctx.prisma.task.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
