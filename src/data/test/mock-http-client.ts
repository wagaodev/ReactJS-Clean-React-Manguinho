import { THttpPostClient } from '@/data/protocols/http/http-post-client';
import { TRequestHttpPostClient } from '@/data/protocols/http/types';

export class HttpPostClientSpy implements THttpPostClient {
  url?: string;
  body?: object;
  async post(params: TRequestHttpPostClient): Promise<void> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve();
  }
}
