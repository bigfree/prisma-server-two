import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateLabelArgs } from "./args/AggregateLabelArgs";
import { CreateLabelArgs } from "./args/CreateLabelArgs";
import { DeleteLabelArgs } from "./args/DeleteLabelArgs";
import { DeleteManyLabelArgs } from "./args/DeleteManyLabelArgs";
import { FindFirstLabelArgs } from "./args/FindFirstLabelArgs";
import { FindManyLabelArgs } from "./args/FindManyLabelArgs";
import { FindOneLabelArgs } from "./args/FindOneLabelArgs";
import { UpdateLabelArgs } from "./args/UpdateLabelArgs";
import { UpdateManyLabelArgs } from "./args/UpdateManyLabelArgs";
import { UpsertLabelArgs } from "./args/UpsertLabelArgs";
import { Label } from "../../../models/Label";
import { AggregateLabel } from "../../outputs/AggregateLabel";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Label)
export class LabelCrudResolver {
  @TypeGraphQL.Query(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async label(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOneLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.findOne(args);
  }

  @TypeGraphQL.Query(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async findFirstLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Label], {
    nullable: false,
    description: undefined
  })
  async labels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyLabelArgs): Promise<Label[]> {
    return ctx.prisma.label.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: false,
    description: undefined
  })
  async createLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateLabelArgs): Promise<Label> {
    return ctx.prisma.label.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async deleteLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: true,
    description: undefined
  })
  async updateLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateLabelArgs): Promise<Label | null> {
    return ctx.prisma.label.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyLabelArgs): Promise<BatchPayload> {
    return ctx.prisma.label.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyLabelArgs): Promise<BatchPayload> {
    return ctx.prisma.label.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Label, {
    nullable: false,
    description: undefined
  })
  async upsertLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertLabelArgs): Promise<Label> {
    return ctx.prisma.label.upsert(args);
  }

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
