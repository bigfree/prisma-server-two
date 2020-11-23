import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { ProjectUsersArgs } from "./args/ProjectUsersArgs";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false,
    description: undefined,
  })
  async projectOwner(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return ctx.prisma.project.findOne({
      where: {
        id: project.id,
      },
    }).projectOwner({});
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: true,
    description: undefined,
  })
  async users(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectUsersArgs): Promise<User[] | null> {
    return ctx.prisma.project.findOne({
      where: {
        id: project.id,
      },
    }).users(args);
  }
}
