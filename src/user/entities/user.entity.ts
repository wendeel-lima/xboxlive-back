import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { CreateGameDto } from 'src/game/dto/create-game.dto';

export class User {
  name: string;
  surname: string;
  cpf: number;
  email: string;
  password: string;
  profile?: CreateProfileDto[];
  games?: CreateGameDto[];
}
