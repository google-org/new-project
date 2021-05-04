import { Controller, Get, Query } from '@nestjs/common';
import { PunsService } from './puns.service';

@Controller('puns')
export class PunsController {
  constructor(private punsService: PunsService) {}

  @Get()
  returnPun(@Query("subject") subject: string): string {
    if (!subject) {
      return 'Try adding ?subject=hemingway';
    }
    return this.punsService.returnPun(subject);
  }
}