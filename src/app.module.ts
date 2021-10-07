import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';
import { GenreModule } from './genre/genre.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GameModule, ProfileModule, GenreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
