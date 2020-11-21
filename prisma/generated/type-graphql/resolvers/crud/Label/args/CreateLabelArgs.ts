import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { LabelCreateInput } from "../../../inputs/LabelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateLabelArgs {
  @TypeGraphQL.Field(_type => LabelCreateInput, { nullable: false })
  data!: LabelCreateInput;
}
