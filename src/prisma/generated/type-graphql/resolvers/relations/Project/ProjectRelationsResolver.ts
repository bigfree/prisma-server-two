import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { ProjectAssignUsersArgs } from "./args/ProjectAssignUsersArgs";

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
  async assignUsers(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectAssignUsersArgs): Promise<User[] | null> {
    return ctx.prisma.project.findOne({
      where: {
        id: project.id,
      },
    }).assignUsers(args);
  }
}
