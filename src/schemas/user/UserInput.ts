import { Field, InputType, Int } from "type-graphql";
import { IsEmail, IsInt, IsString, Max, Min } from "class-validator";
import { User as IUser } from "../../prisma/client";

@InputType()
export default class UserInput implements Partial<IUser>{
    @Field((type) => Int, { nullable: true })
    @IsInt()
    id?: number;

    @Field((type) => String, { nullable: true })
    @IsString()
    @IsEmail()
    email?: string;

    @Field((type) => Int, { nullable: true })
    @Min(0)
    skip?: number;

    @Field((type) => Int, { nullable: true, defaultValue: 25 })
    @IsInt()
    @Min(1)
    @Max(100)
    take: number = 25;

    get startIndex(): number | undefined {
        return this.skip;
    }

    get endIndex(): number | undefined {
        if (this.skip === undefined || this.take === undefined) {
            return undefined;
        }
        return this.skip + this.take;
    }
}