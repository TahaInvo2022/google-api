import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}