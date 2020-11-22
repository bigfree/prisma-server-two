import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { LabelOrderByInput } from "../../../inputs/LabelOrderByInput";
import { LabelWhereInput } from "../../../inputs/LabelWhereInput";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";
import { LabelDistinctFieldEnum } from "../../../../enums/LabelDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class AggregateLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereInput, { nullable: true })
  where?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LabelOrderByInput], { nullable: true })
  orderBy?: LabelOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, { nullable: true })
  cursor?: LabelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [LabelDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "createdAt"> | undefined;
}
