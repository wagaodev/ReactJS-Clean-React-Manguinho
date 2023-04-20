import { HttpStatusCode } from '@/enum';

export type TRequestHttpPostClient<T> = {
  url: string;
  body?: T;
};

// http-response
export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};
