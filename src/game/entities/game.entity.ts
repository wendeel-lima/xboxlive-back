import { CreateGenreDto } from 'src/genre/dto/create-genre.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class Game {
  name: string;
  frontCover?: string;
  description?: string;
  year: string;
  score?: number;
  linkTreiler?: string;
  linkGameplay?: string;
  genres?: CreateGenreDto[];
  users?: CreateUserDto[];
}
