import { IsString, IsEmail } from 'class-validator';

export class UserEditDTO {

    @IsString()
    FirstName: string;

    @IsString()
    LastName: string;

    @IsEmail()
    email: string;
}
