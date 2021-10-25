import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
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
  cpf: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsInt({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  profileIds?: number[];

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  @ArrayNotEmpty()
  gamesIds?: number[];
}
