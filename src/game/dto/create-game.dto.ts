import { Optional } from '@nestjs/common';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Game } from '../entities/game.entity';

export class CreateGameDto extends Game {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsUrl()
  frontCover?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsInt()
  @Optional()
  score: number;

  @IsUrl()
  @IsOptional()
  linkTreiler?: string;

  @IsUrl()
  @IsOptional()
  linkGameplay?: string;
}
