import {
  HttpResponse,
  TRequestHttpPostParams,
  THttpPostClient,
} from '@/data/protocols';
import { HttpStatusCode } from '@/enum';

export class HttpPostClientSpy<T, R> implements THttpPostClient<T, R> {
  url?: string;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.OK,
  };
  async post(params: TRequestHttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
