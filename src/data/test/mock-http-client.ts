import { THttpPostClient } from 'data/protocols/http/http-post-client';

export class HttpPostClientSpy implements THttpPostClient {
  url?: string;
  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}
