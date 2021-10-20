import { Prisma } from '.prisma/client';

export class Game implements Prisma.GameCreateInput {
  name: string;
  frontCover?: string;
  description?: string;
  year: string;
  score?: number;
  linkTreiler?: string;
  linkGameplay?: string;
  genres?: Prisma.GenreCreateNestedManyWithoutGamesInput;
  users?: Prisma.UserCreateNestedManyWithoutGamesInput;
}
