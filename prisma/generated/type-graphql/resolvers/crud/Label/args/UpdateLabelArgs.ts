import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { LabelUpdateInput } from "../../../inputs/LabelUpdateInput";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateLabelArgs {
  @TypeGraphQL.Field(_type => LabelUpdateInput, { nullable: false })
  data!: LabelUpdateInput;

  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, { nullable: false })
  where!: LabelWhereUniqueInput;
}
