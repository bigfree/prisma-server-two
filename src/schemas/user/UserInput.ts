import { Field, InputType } from "type-graphql";
import { IsArray } from "class-validator";
import { Enumerable, UserWhereInput as IUserWhereInput } from "../../prisma/client";
import { IntFilter } from "../../filters/IntFilter";
import { StringFilter } from "../../filters/StringFilter";
import { NullableStringFilter } from "../../filters/NullableStringFilter";
import { DateTimeFilter } from "../../filters/DateTimeFilter";
import { NullableDateTimeFilter } from "../../filters/NullableDateTimeFilter";
import { TaskFilter } from "../task/TaskInputs";

@InputType()
export class UserWhereInput implements Partial<IUserWhereInput> {
    @Field(() => IntFilter, { nullable: true })
    id?: number | IntFilter;

    @Field(() => StringFilter, { nullable: true })
    email?: string | StringFilter;

    @Field(() => NullableStringFilter, { nullable: true })
    name?: string | NullableStringFilter | null;

    @Field(() => StringFilter, { nullable: true })
    password?: string | StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: Date | string | DateTimeFilter;

    @Field(() => NullableDateTimeFilter, { nullable: true })
    updatedAt?: Date | string | NullableDateTimeFilter | null;

    @Field(() => NullableDateTimeFilter, { nullable: true })
    deletedAt?: Date | string | NullableDateTimeFilter | null;

    @Field(() => TaskFilter, { nullable: true })
    tasks?: TaskFilter | null;

    @Field(() => [UserWhereInput], { nullable: true })
    @IsArray()
    AND?: Enumerable<UserWhereInput>;

    @Field(() => [UserWhereInput], { nullable: true })
    @IsArray()
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], { nullable: true })
    @IsArray()
    NOT?: Enumerable<UserWhereInput>;

}

// @InputType()
// export default class UserInput implements Partial<IUser>{
//     @Field((type) => Int, { nullable: true })
//     @IsInt()
//     id?: number;
//
//     @Field((type) => String, { nullable: true })
//     @IsString()
//     @IsEmail()
//     email?: string;
//
//     @Field((type) => Int, { nullable: true })
//     @Min(0)
//     skip?: number;
//
//     @Field((type) => Int, { nullable: true, defaultValue: 25 })
//     @IsInt()
//     @Min(1)
//     @Max(100)
//     take: number = 25;
//
//     get startIndex(): number | undefined {
//         return this.skip;
//     }
//
//     get endIndex(): number | undefined {
//         if (this.skip === undefined || this.take === undefined) {
//             return undefined;
//         }
//         return this.skip + this.take;
//     }
// }