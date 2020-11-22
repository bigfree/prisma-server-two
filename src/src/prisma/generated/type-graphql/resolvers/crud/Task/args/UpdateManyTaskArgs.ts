import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TaskUpdateManyMutationInput } from "../../../inputs/TaskUpdateManyMutationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskArgs {
  @TypeGraphQL.Field(_type => TaskUpdateManyMutationInput, { nullable: false })
  data!: TaskUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TaskWhereInput, { nullable: true })
  where?: TaskWhereInput | undefined;
}
