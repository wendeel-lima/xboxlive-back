import { Game } from "../entities/game.entity";

export class CreateGameDto extends Game {
    id?: number;
    name: string;
    frontCover?: string;
    description?: string;
    year: number;
    score: number;
    linkTreiler?: string;
    linkGameplay?: string;
}
