import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsOptional()
  frontCover?: string;

  @IsOptional()
  userId: number;
}
