import { THttpPostClient } from 'data/protocols/http/http-post-client';
import { TRequestHttpPostClient } from 'data/protocols/http/types';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: THttpPostClient,
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post({ url: this.url } as any);
  }
}
