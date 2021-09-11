import { Injectable } from '@nestjs/common';
import { Data, data } from './data-store';

@Injectable()
export class AppService {
  getData(): Data[] {
    return data;
  }
}
