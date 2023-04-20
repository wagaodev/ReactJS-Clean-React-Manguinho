import { THttpPostClient } from '@/data/protocols/http/http-post-client';
import {
  HttpResponse,
  TRequestHttpPostClient,
} from '@/data/protocols/http/types';
import { HttpStatusCode } from '@/enum/http-status-code';

export class HttpPostClientSpy<T, R> implements THttpPostClient<T, R> {
  url?: string;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.OK,
  };
  async post(params: TRequestHttpPostClient<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
