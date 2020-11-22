import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelCreateOrConnectWithouttasksInput } from "../inputs/LabelCreateOrConnectWithouttasksInput";
import { LabelCreateWithoutTasksInput } from "../inputs/LabelCreateWithoutTasksInput";
import { LabelScalarWhereInput } from "../inputs/LabelScalarWhereInput";
import { LabelUpdateManyWithWhereWithoutTasksInput } from "../inputs/LabelUpdateManyWithWhereWithoutTasksInput";
import { LabelUpdateWithWhereUniqueWithoutTasksInput } from "../inputs/LabelUpdateWithWhereUniqueWithoutTasksInput";
import { LabelUpsertWithWhereUniqueWithoutTasksInput } from "../inputs/LabelUpsertWithWhereUniqueWithoutTasksInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class LabelUpdateManyWithoutTasksInput {
  @TypeGraphQL.Field(_type => [LabelCreateWithoutTasksInput], {
    nullable: true,
    description: undefined
  })
  create?: LabelCreateWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: LabelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpdateWithWhereUniqueWithoutTasksInput], {
    nullable: true,
    description: undefined
  })
  update?: LabelUpdateWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpdateManyWithWhereWithoutTasksInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: LabelUpdateManyWithWhereWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: LabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelUpsertWithWhereUniqueWithoutTasksInput], {
    nullable: true,
    description: undefined
  })
  upsert?: LabelUpsertWithWhereUniqueWithoutTasksInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelCreateOrConnectWithouttasksInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: LabelCreateOrConnectWithouttasksInput[] | undefined;
}
