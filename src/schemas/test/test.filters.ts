import { Field, InputType } from "type-graphql";
import {
    FindOneTestArgs as IFindOneTestArgs,
    TestSelect as ITestSelect,
    TestWhereUniqueInput as ITestWhereUniqueInput
} from "../../prisma/client";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class TestSelect implements Partial<ITestSelect> {

    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    id?: boolean;

    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    name?: boolean;

    @Field(type => Boolean, { nullable: true })
    @IsBoolean()
    createdAt?: boolean;
}

@InputType()
export class TestWhereUniqueInput implements Partial<ITestWhereUniqueInput> {

    @Field(type => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    id?: string
}

@InputType()
export class FindOneTestArgs implements Partial<IFindOneTestArgs> {

    @Field(type => TestSelect, { nullable: true })
    select?: ITestSelect | null;

    @Field(type => TestWhereUniqueInput, { nullable: true })
    where: ITestWhereUniqueInput;
}