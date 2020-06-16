import { Arg, Resolver, Root, Subscription } from "type-graphql";
import { ITaskNotificationPayload, TaskNotification } from "./TaskInterface";

@Resolver()
export default class {

    /**
     * Create task
     * @param topic
     * @param taskCreateInput
     * @param prisma
     * @param userId
     * @param pubSub
     */
    // @Mutation(() => Task, { description: "Create task" })
    // @Authorized()
    // async createTask(
    //     @PubSub() pubSub: PubSubEngine,
    //     @Arg("topic") topic: string,
    //     @Arg("input") taskCreateInput: TaskCreateInput,
    //     @Ctx("prisma") prisma: PrismaClient,
    //     @Ctx("user") userId: number,
    //     // @PubSub("NOTIFICATIONS") publish: Publisher<ITaskNotificationPayload>,
    // ): Promise<Task & { user: UserGetPayload<{ user: boolean; labels: boolean }["user"]>; labels: Array<LabelGetPayload<{ user: boolean; labels: boolean }["labels"]>> }> {
    //     try {
    //         const task = await prisma.task.create({
    //             data: {
    //                 name: taskCreateInput.name,
    //                 content: taskCreateInput?.content,
    //                 user: {
    //                     connect: {
    //                         id: userId
    //                     }
    //                 },
    //                 labels: taskCreateInput?.labels
    //             },
    //             include: {
    //                 user: true,
    //                 labels: true,
    //             }
    //         });
    //
    //         await pubSub.publish(topic,{
    //             id: task.id,
    //             task,
    //             message: "Bola vytvorena nová uloha",
    //         });
    //
    //         return task;
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    /**
     * Detail task
     * @param taskUpdateArgs
     * @param prisma
     */
    // @Query(() => Task, { nullable: true, description: "Detail task" })
    // @Authorized()
    // async task(
    //     @Args() taskUpdateArgs: TaskArgs,
    //     @Ctx("prisma") prisma: PrismaClient
    // ): Promise<(Task & { user: UserGetPayload<{ user: boolean; labels: boolean }["user"]>; labels: Array<LabelGetPayload<{ user: boolean; labels: boolean }["labels"]>> }) | null> {
    //     try {
    //         return await prisma.task.findOne({
    //             where: {
    //                 id: taskUpdateArgs.id
    //             },
    //             include: {
    //                 user: true,
    //                 labels: true
    //             }
    //         })
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    /**
     * Feed task
     * @param tasksFilter
     * @param prisma
     */
    // @Query(() => [Task], { nullable: true, description: "Feed tasks" })
    // @Authorized()
    // async tasks(
    //     @Args() tasksFilter: TasksFilter,
    //     @Ctx("prisma") prisma: PrismaClient
    // ): Promise<Array<TaskGetPayload<{ include: { user: boolean }; where: { name: { contains: string | undefined }; user: { id: number | undefined } } }>>> {
    //     try {
    //         return await prisma.task.findMany({
    //             where: {
    //                 name: {
    //                     contains: tasksFilter?.name,
    //                 },
    //                 user: {
    //                     id: tasksFilter?.userId,
    //                 }
    //             },
    //             include: {
    //                 user: true,
    //                 labels: true,
    //             }
    //         })
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    /**
     * Update task
     * @param taskFilter
     * @param taskUpdateInput
     * @param prisma
     */
    // @Mutation(() => Task, { description: "Update task" })
    // @Authorized()
    // async updateTask(
    //     @Args() taskFilter: TaskArgs,
    //     @Arg("input") taskUpdateInput: TaskUpdateInput,
    //     @Ctx("prisma") prisma: PrismaClient
    // ): Promise<Task & { user: UserGetPayload<{ user: boolean }["user"]> }> {
    //     try {
    //         return await prisma.task.update({
    //             where: {
    //                 id: taskFilter.id
    //             },
    //             data: {
    //                 name: taskUpdateInput?.name,
    //                 content: taskUpdateInput?.content,
    //                 archiveAt: taskUpdateInput?.archiveAt,
    //                 deletedAt: taskUpdateInput?.deletedAt,
    //                 labels: taskUpdateInput?.labels,
    //             },
    //             include: {
    //                 user: true,
    //                 labels: true
    //             }
    //         })
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    /**
     * Delete one task
     * @param taskFilter
     * @param topic
     */
    // @Mutation(() => Task, { nullable: true, description: "Delete one task" })
    // @Authorized()
    // async deleteTask(
    //     @Args() taskFilter: TaskArgs,
    //     @Ctx("prisma") prisma: PrismaClient
    // ): Promise<Task> {
    //     try {
    //         return await prisma.task.delete({
    //             where: {
    //                 id: taskFilter.id
    //             }
    //         })
    //     } catch (err) {
    //         throw new Error(err);
    //     }
    // }

    @Subscription({
        topics: ({ args, payload, context }) => args.topic
    })
    taskSubscription(
        @Arg("topic") topic: string,
        @Root() { id, message, task }: ITaskNotificationPayload
    ): TaskNotification {
        return {
            id,
            message,
            task,
            date: new Date()
        }
    }
}
