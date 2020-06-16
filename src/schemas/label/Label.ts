import { Field, ID, ObjectType } from "type-graphql";
import { Label as ILabel } from "../../prisma/client";
import Task from "../task/Task";

@ObjectType({ description: "Label model" })
export default class Label implements Partial<ILabel> {

    @Field(type => ID)
    id: string;

    @Field(type => String)
    name: string;

    @Field(type => Date)
    createdAt: Date;

    @Field(type => [Task])
    tasks?: Task;
}