import { CreateGameDto } from 'src/game/dto/create-game.dto';

export class Genre {
  name: string;
  games?: CreateGameDto;
}
