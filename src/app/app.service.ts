import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Time of My Life!';
  }

  getTime(): string {
    return new Date().toLocaleTimeString();
  }
}
