import { HttpStatusCode } from '@/enum';

export type TRequestHttpPostParams<T> = {
  url: string;
  body?: T;
};

// http-response
export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};
