import { Field, InputType } from "type-graphql";
import { IsEmail, Length } from "class-validator";

@InputType({ description: "SignUp input data" })
export default class AuthInput {

    @Field(type => String)
    @IsEmail()
    email: string;

    @Field(type => String)
    @Length(3)
    password: string;

    @Field(type => String, { nullable: true })
    @Length(3)
    name: string;
}