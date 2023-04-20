import { THttpPostClient } from '@/data/protocols/http/http-post-client';
import { InternalServerError, NotFoundError } from '@/domain/errors';
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { TAccountModel } from '@/domain/models/types';
import { TAuthenticationParams } from '@/domain/usecases/authentication';
import { HttpStatusCode } from '@/enum/http-status-code';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: THttpPostClient<
      TAuthenticationParams,
      TAccountModel
    >,
  ) {}

  async auth(params: TAuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        return;
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      case HttpStatusCode.INTERNAL_SERVER_ERROR:
        throw new InternalServerError();
      case HttpStatusCode.NOT_FOUND:
        throw new NotFoundError();
      default:
        throw new UnexpectedError();
    }
  }
}
