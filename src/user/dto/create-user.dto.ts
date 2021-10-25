import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Cpf } from 'src/decorators/cpf.decorator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @Cpf()
  cpf: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  profileIds?: number[];

  @IsInt({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  gamesIds?: number[];
}
