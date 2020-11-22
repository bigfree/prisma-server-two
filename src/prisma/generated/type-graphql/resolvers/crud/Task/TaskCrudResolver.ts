import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";
import { CreateTaskArgs } from "./args/CreateTaskArgs";
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs";
import { DeleteTaskArgs } from "./args/DeleteTaskArgs";
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs";
import { FindManyTaskArgs } from "./args/FindManyTaskArgs";
import { FindOneTaskArgs } from "./args/FindOneTaskArgs";
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs";
import { UpdateTaskArgs } from "./args/UpdateTaskArgs";
import { UpsertTaskArgs } from "./args/UpsertTaskArgs";
import { Task } from "../../../models/Task";
import { AggregateTask } from "../../outputs/AggregateTask";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Task)
export class TaskCrudResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async task(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async findFirstTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Task], {
    nullable: false,
    description: undefined
  })
  async tasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTaskArgs): Promise<Task[]> {
    return ctx.prisma.task.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false,
    description: undefined
  })
  async createTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTaskArgs): Promise<Task> {
    return ctx.prisma.task.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async deleteTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true,
    description: undefined
  })
  async updateTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTaskArgs): Promise<Task | null> {
    return ctx.prisma.task.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTaskArgs): Promise<BatchPayload> {
    return ctx.prisma.task.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTaskArgs): Promise<BatchPayload> {
    return ctx.prisma.task.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false,
    description: undefined
  })
  async upsertTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTaskArgs): Promise<Task> {
    return ctx.prisma.task.upsert(args);
  }

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
