import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { LabelCreateOrConnectWithouttasksInput } from "./LabelCreateOrConnectWithouttasksInput";
import { LabelCreateWithoutTasksInput } from "./LabelCreateWithoutTasksInput";
import { LabelScalarWhereInput } from "./LabelScalarWhereInput";
import { LabelUpdateManyWithWhereWithoutTasksInput } from "./LabelUpdateManyWithWhereWithoutTasksInput";
import { LabelUpdateWithWhereUniqueWithoutTasksInput } from "./LabelUpdateWithWhereUniqueWithoutTasksInput";
import { LabelUpsertWithWhereUniqueWithoutTasksInput } from "./LabelUpsertWithWhereUniqueWithoutTasksInput";
import { LabelWhereUniqueInput } from "./LabelWhereUniqueInput";

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
