import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly username: string;

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}