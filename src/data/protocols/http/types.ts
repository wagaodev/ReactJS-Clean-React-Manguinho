import { HttpStatusCode } from '@/enum';

export type TRequestHttpPostParams<T> = {
  url: string;
  body?: T;
};

// http-response
export type THttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};
