import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateWorkspaceArgs } from "./args/AggregateWorkspaceArgs";
import { CreateWorkspaceArgs } from "./args/CreateWorkspaceArgs";
import { DeleteManyWorkspaceArgs } from "./args/DeleteManyWorkspaceArgs";
import { DeleteWorkspaceArgs } from "./args/DeleteWorkspaceArgs";
import { FindFirstWorkspaceArgs } from "./args/FindFirstWorkspaceArgs";
import { FindManyWorkspaceArgs } from "./args/FindManyWorkspaceArgs";
import { FindOneWorkspaceArgs } from "./args/FindOneWorkspaceArgs";
import { UpdateManyWorkspaceArgs } from "./args/UpdateManyWorkspaceArgs";
import { UpdateWorkspaceArgs } from "./args/UpdateWorkspaceArgs";
import { UpsertWorkspaceArgs } from "./args/UpsertWorkspaceArgs";
import { Workspace } from "../../../models/Workspace";
import { AggregateWorkspace } from "../../outputs/AggregateWorkspace";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Workspace)
export class WorkspaceCrudResolver {
  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async workspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async findFirstWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Workspace], {
    nullable: false,
    description: undefined
  })
  async workspaces(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyWorkspaceArgs): Promise<Workspace[]> {
    return ctx.prisma.workspace.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: false,
    description: undefined
  })
  async createWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateWorkspaceArgs): Promise<Workspace> {
    return ctx.prisma.workspace.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async deleteWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: true,
    description: undefined
  })
  async updateWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateWorkspaceArgs): Promise<Workspace | null> {
    return ctx.prisma.workspace.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyWorkspaceArgs): Promise<BatchPayload> {
    return ctx.prisma.workspace.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyWorkspaceArgs): Promise<BatchPayload> {
    return ctx.prisma.workspace.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Workspace, {
    nullable: false,
    description: undefined
  })
  async upsertWorkspace(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertWorkspaceArgs): Promise<Workspace> {
    return ctx.prisma.workspace.upsert(args);
  }

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
