import { THttpPostClient } from '@/data/protocols/http/http-post-client';
import { InternalServerError, NotFoundError } from '@/domain/errors';
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error';
import { UnexpectedError } from '@/domain/errors/unexpected-error';
import { TAccountModel } from '@/domain/models/types';
import { Authentication } from '@/domain/usecases/authentication';
import { TAuthenticationParams } from '@/domain/usecases/types';
import { HttpStatusCode } from '@/enum/http-status-code';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: THttpPostClient<
      TAuthenticationParams,
      TAccountModel
    >,
  ) {}

  async auth(params: TAuthenticationParams): Promise<TAccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        return httpResponse.body;
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
