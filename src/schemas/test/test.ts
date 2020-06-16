import { Field, ID, ObjectType } from "type-graphql";
import { Test as ITest } from "../../prisma/client";

@ObjectType()
export default class Test implements Partial<ITest> {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    name: string;

    @Field(type => Date)
    createdAt: Date;
}