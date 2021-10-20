import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class Profile {
  name: string;
  frontCover?: string;
  user: CreateUserDto[];
}
