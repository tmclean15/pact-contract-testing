import { Injectable } from '@nestjs/common';
import { data } from './data-store';
import { Data } from '@pact-contract-testing/shared-types';

@Injectable()
export class AppService {
  getData(): Data[] {
    return data;
  }
}
