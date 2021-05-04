import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PunsController } from './puns.controller';
import { PunsService } from './puns.service';

@Module({
  imports: [],
  controllers: [AppController, PunsController],
  providers: [AppService, PunsService],
})
export class AppModule {}
