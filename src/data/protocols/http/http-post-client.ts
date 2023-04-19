import { HttpResponse, TRequestHttpPostClient } from './types';

// I use each interface with one single responsability following a solid method
// of Interface segregation principle.
export interface THttpPostClient {
  post(params: TRequestHttpPostClient): Promise<HttpResponse>;
}
