import { Field, ID, ObjectType } from "type-graphql"
import { User as UserPrisma } from "../../prisma/client";
import Task from "../task/Task";

@ObjectType({ description: "User model" })
export default class User implements Partial<UserPrisma> {

    @Field(() => ID)
    id: number;

    @Field(() => String)
    email: string;

    @Field(() => String, { nullable: true })
    name?: string | null;

    @Field(() => String)
    password: string;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | null;

    @Field(() => Date, { nullable: true })
    deletedAt?: Date | null;

    @Field(() => [Task], { nullable: true })
    tasks?: Task[] | null;
}