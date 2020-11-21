import { Field, ObjectType } from "type-graphql";
import { User } from "../../../prisma/generated/type-graphql/models";

@ObjectType({ description: "Auth payload" })
export default class Auth {
    @Field(type => String)
    token: string;

    @Field(type => User)
    user: User;
}