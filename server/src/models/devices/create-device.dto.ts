
import { IsString, Length } from 'class-validator';

export class CreateDeviceDTO {
    @IsString()
    @Length(3, 100)
    name: string;

    @IsString()
    @Length(3, 100)
    longitude: string;

    @IsString()
    @Length(3, 100)
    latitude: string;
}
