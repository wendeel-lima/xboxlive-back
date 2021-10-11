import { Prisma } from "@prisma/client";


export class Profile implements Prisma.ProfileUncheckedCreateInput{
    id?: number;
    name: string;
    frontCover?: string;
    userId: number;
}
