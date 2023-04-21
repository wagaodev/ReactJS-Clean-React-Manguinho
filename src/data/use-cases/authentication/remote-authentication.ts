import { THttpPostClient } from '@/data/protocols';
import { HttpStatusCode } from '@/enum';
import {
  InternalServerError,
  NotFoundError,
  UnexpectedError,
  InvalidCredentialsError,
} from '@/domain/errors';
import { TAccountModel } from '@/domain/models';
import { Authentication, TAuthenticationParams } from '@/domain/usecases';

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
