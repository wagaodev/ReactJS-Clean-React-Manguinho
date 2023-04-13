import { THttpPostClient } from 'data/protocols/http/http-post-client';

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: THttpPostClient,
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post(this.url);
  }
}

export { RemoteAuthentication };
