import { HttpStatusCode } from '@/enum/http-status-code';

export type TRequestHttpPostClient = {
  url: string;
  body?: TBodyHttpPostClient | undefined;
};

export type TBodyHttpPostClient = {
  email?: string;
  password?: string;
};

// http-response
export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};
