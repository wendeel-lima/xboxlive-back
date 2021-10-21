import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.UserInclude = {
    profile: true,
    games: {
      select: {
        name: true,
        frontCover: true,
        genres: true,
      },
    },
  };

  create(dto: CreateUserDto) {
    const profileIds = dto.profileIds;
    const gamesIds = dto.gamesIds;

    delete dto.profileIds;
    delete dto.gamesIds;

    const data: Prisma.UserCreateInput = {
      ...dto,
      profile: {
        connect: profileIds?.map((profileIds) => ({
          id: profileIds,
        })),
      },
      games: {
        connect: gamesIds?.map((gamesIds) => ({
          id: gamesIds,
        })),
      },
    };

    return this.prisma.user.create({ data, include: this._include });
  }

  findAll() {
    return this.prisma.user.findMany({ include: this._include });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, dto: UpdateUserDto) {
    const profileIds = dto.profileIds;
    const gamesIds = dto.gamesIds;

    delete dto.profileIds;
    delete dto.gamesIds;

    const data: Prisma.UserUpdateInput = {
      ...dto,
      profile: {
        connect: profileIds?.map((profileIds) => ({
          id: profileIds,
        })),
      },
      games: {
        connect: gamesIds?.map((gamesIds) => ({
          id: gamesIds,
        })),
      },
    };
    return this.prisma.user.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
