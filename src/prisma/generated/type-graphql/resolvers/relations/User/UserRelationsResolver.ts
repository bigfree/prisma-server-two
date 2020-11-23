import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { Workspace } from "../../../models/Workspace";
import { UserProjectArgs } from "./args/UserProjectArgs";
import { UserProjectsArgs } from "./args/UserProjectsArgs";
import { UserTasksArgs } from "./args/UserTasksArgs";
import { UserWorkspacesArgs } from "./args/UserWorkspacesArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: true,
    description: undefined,
  })
  async tasks(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTasksArgs): Promise<Task[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).tasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Workspace], {
    nullable: true,
    description: undefined,
  })
  async workspaces(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserWorkspacesArgs): Promise<Workspace[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).workspaces(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: true,
    description: undefined,
  })
  async projects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProjectsArgs): Promise<Project[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).projects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: true,
    description: undefined,
  })
  async project(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProjectArgs): Promise<Project[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).project(args);
  }
}
