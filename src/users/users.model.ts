import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'unique identificator'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'test@test.com', description: 'email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({example: '111111Aa%', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @ApiProperty({example: 'true', description: 'ban identificator'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @ApiProperty({example: 'This user was banned cuz...', description: 'ban reason textfield'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;
}