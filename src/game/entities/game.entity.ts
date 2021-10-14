import { Prisma } from '@prisma/client';

export class Game implements Prisma.GameUncheckedCreateInput {
  id?: number;
  name: string;
  frontCover?: string;
  description?: string;
  year: number;
  score?: number;
  linkTreiler?: string;
  linkGameplay?: string;
}
