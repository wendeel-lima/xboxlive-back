import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.GenreInclude = {
    games: true,
  };

  create(dto: CreateGenreDto) {
    const gamesIds = dto.gamesIds;
    delete dto.gamesIds;

    const data: Prisma.GenreCreateInput = {
      ...dto,
      games: {
        connect: gamesIds?.map((gamesIds) => ({
          id: gamesIds,
        })),
      },
    };
    return this.prisma.genre.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.genre.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateGenreDto) {
    const gamesIds = dto.gamesIds;
    delete dto.gamesIds;

    const data: Prisma.GenreUpdateInput = {
      ...dto,
      games: {
        connect: gamesIds?.map((gamesIds) => ({
          id: gamesIds,
        })),
      },
    };

    return this.prisma.genre.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({
      where: { id },
    });
  }
}
