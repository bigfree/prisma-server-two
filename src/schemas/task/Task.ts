import { Field, ID, ObjectType } from "type-graphql";
import { Task as ITask } from "../../prisma/client";
import User from "../user/User";
import Label from "../label/Label";

@ObjectType({ description: "Task model" })
export default class Task implements Partial<ITask> {

    @Field(() => ID)
    id: number;

    @Field(() => String)
    name: string

    @Field(() => String, { nullable: true })
    content?: string | null;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | null;

    @Field(() => Date, { nullable: true })
    deletedAt?: Date | null;

    @Field(() => Date, { nullable: true })
    archiveAt?: Date | null;

    @Field(() => User, { nullable: true })
    user?: User | null;

    @Field(() => [Label], { nullable: true })
    labels?: Label[] | null;
}