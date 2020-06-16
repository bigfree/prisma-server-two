import { Field, Int, ObjectType } from "type-graphql";
import { IsDate, IsInt, IsString } from "class-validator";
import Task from "./Task";

export interface ITaskNotificationPayload {
    id: number,
    message?: string,
    task?: Task,
}

@ObjectType()
export class TaskNotification {

    @Field(() => Int)
    @IsInt()
    id: number;

    @Field(() => String, { nullable: true })
    @IsString()
    message?: string;

    @Field(() => Task, { nullable: true })
    task?: Task;

    @Field(() => Date)
    @IsDate()
    date: Date;
}