import { Optional } from '@nestjs/common';
import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
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

  @IsInt({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  genresIds?: number[];

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  userIds?: number[];
}
