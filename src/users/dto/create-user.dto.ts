import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'test@test.com', description: 'email address'})
    readonly email: string;
    @ApiProperty({example: '111111Aa%', description: 'password'})
    readonly password: string;
}