import { Field, ObjectType } from "type-graphql";
import User from "../user/User";

@ObjectType({ description: "Auth payload" })
export default class Auth {
    @Field(type => String, { nullable: true })
    message?: string;

    @Field(type => Boolean)
    success: boolean;

    @Field(type => String)
    token: string;

    @Field(type => User)
    user: User;
}