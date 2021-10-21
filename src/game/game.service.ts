import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.GameInclude = {
    users: true,
    genres: true,
  };

  create(dto: CreateGameDto) {
    const usersIds = dto.userIds;
    const genresIds = dto.genresIds;

    delete dto.userIds;
    delete dto.genresIds;

    const data: Prisma.GameCreateInput = {
      ...dto,
      users: {
        connect: usersIds?.map((userId) => ({
          id: userId,
        })),
      },
      genres: {
        connect: genresIds?.map((genresIds) => ({
          id: genresIds,
        })),
      },
    };
    return this.prisma.game.create({ data, include: this._include });
  }

  findAll() {
    return this.prisma.game.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
      include: this._include,
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
        connect: usersIds?.map((userId) => ({
          id: userId,
        })),
      },
      genres: {
        connect: genresIds?.map((genreId) => ({
          id: genreId,
        })),
      },
    };

    return this.prisma.game.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
