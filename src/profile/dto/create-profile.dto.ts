import { Profile } from "../entities/profile.entity";


export class CreateProfileDto extends Profile{
    name: string;
    frontCover?: string;
    userId: number;
}
