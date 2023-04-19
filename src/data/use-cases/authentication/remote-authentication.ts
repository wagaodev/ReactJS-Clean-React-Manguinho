import { THttpPostClient } from '@/data/protocols/http/http-post-client';
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { TAuthenticationParams } from '@/domain/usecases/authentication';
import { HttpStatusCode } from '@/enum/http-status-code';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: THttpPostClient,
  ) {}

  async auth(params: TAuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      default:
        return Promise.resolve();
    }
  }
}
