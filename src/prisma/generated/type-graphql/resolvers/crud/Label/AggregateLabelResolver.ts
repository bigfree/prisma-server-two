import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLabelArgs } from "./args/AggregateLabelArgs";
import { Label } from "../../../models/Label";
import { AggregateLabel } from "../../outputs/AggregateLabel";

@TypeGraphQL.Resolver(_of => Label)
export class AggregateLabelResolver {
  @TypeGraphQL.Query(_returns => AggregateLabel, {
    nullable: false,
    description: undefined
  })
  async aggregateLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLabelArgs): Promise<AggregateLabel> {
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

    return ctx.prisma.label.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
