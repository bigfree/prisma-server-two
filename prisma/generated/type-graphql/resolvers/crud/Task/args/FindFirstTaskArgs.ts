import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TaskOrderByInput } from "../../../inputs/TaskOrderByInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";
import { TaskDistinctFieldEnum } from "../../../../enums/TaskDistinctFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTaskArgs {
  @TypeGraphQL.Field(_type => TaskWhereInput, { nullable: true })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskOrderByInput], { nullable: true })
  orderBy?: TaskOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, { nullable: true })
  cursor?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TaskDistinctFieldEnum], { nullable: true })
  distinct?: Array<"id" | "name" | "content" | "createdAt" | "updatedAt" | "deletedAt" | "archiveAt" | "userId"> | undefined;
}
