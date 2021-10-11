import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre {
    name: string;
}
