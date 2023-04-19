import { THttpPostClient } from '@/data/protocols/http/http-post-client';
import {
  HttpResponse,
  TRequestHttpPostClient,
} from '@/data/protocols/http/types';
import { HttpStatusCode } from '@/enum/http-status-code';

export class HttpPostClientSpy implements THttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.NO_CONTENT,
  };
  async post(params: TRequestHttpPostClient): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
