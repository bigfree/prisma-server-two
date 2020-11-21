import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspaceArgs } from "./args/AggregateWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
import { AggregateWorkspace } from "../../outputs/AggregateWorkspace";

@TypeGraphQL.Resolver(_of => Workspace)
export class AggregateWorkspaceResolver {
  @TypeGraphQL.Query(_returns => AggregateWorkspace, {
    nullable: false,
    description: undefined
  })
  async aggregateWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateWorkspaceArgs): Promise<AggregateWorkspace> {
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

    return ctx.prisma.workspace.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
