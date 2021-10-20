import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateGameDto) {
    const usersIds = dto.userIds;
    const genresIds = dto.genresIds;

    delete dto.userIds;
    delete dto.genresIds;

    const data: Prisma.GameCreateInput = {
      ...dto,
      users: {
        connect: usersIds.map((userId) => ({
          id: userId,
        })),
      },
      genres: {
        connect: genresIds.map((genreId) => ({
          id: genreId,
        })),
      },
    };
    return this.prisma.game.create({ data });
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateGameDto) {
    const usersIds = dto.userIds;
    const genresIds = dto.genresIds;

    delete dto.userIds;
    delete dto.genresIds;
    const data: Prisma.GameUpdateInput = {
      ...dto,
      users: {
        connect: usersIds.map((userId) => ({
          id: userId,
        })),
      },
      genres: {
        connect: genresIds.map((genreId) => ({
          id: genreId,
        })),
      },
    };

    return this.prisma.game.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
