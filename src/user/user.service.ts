import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// Bcrypt
import * as bcrypt from 'bcrypt';

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

  async create(dto: CreateUserDto) {
    const profileIds = dto.profileIds;
    const gamesIds = dto.gamesIds;

    delete dto.profileIds;
    delete dto.gamesIds;

    const data: Prisma.UserCreateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
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

    const createUser = await this.prisma.user.create({
      data,
      include: this._include,
    });

    return {
      ...createUser,
      password: undefined,
    };
  }

  findAll() {
    return this.prisma.user.findMany({ include: this._include });
  }

  findByid(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: this._include,
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
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
