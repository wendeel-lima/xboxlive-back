import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Genre } from '../entities/genre.entity';

export class CreateGenreDto extends Genre {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  gamesIds?: number[];
}
