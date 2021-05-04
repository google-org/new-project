import { Injectable } from '@nestjs/common';

@Injectable()
export class PunsService {
  returnPun(subject: string): string {
    switch(subject) {
        case "hemingway": {
            return "The pun also rises";
        }
        default: {
            return "<p>Don't know that subject, so...</p><p>seven ate nine :)</p>";
        }
    }
  }
}