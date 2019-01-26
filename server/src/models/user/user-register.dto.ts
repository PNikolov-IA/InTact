import { IsString, IsEmail } from 'class-validator';

export class UserRegisterDTO {

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  FirstName?: string = '';

  @IsString()
  LastName?: string = '';
}
