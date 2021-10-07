import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [GameModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
