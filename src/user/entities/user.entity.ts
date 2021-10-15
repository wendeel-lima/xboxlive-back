import { Prisma } from '@prisma/client';

export class User {
  id?: number;
  name: string;
  surname: string;
  cpf: number;
  email: string;
  password: string;
  profile?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}
