import { HttpResponse, TRequestHttpPostParams } from './types';

// I use each interface with one single responsability following a solid method
// of Interface segregation principle.
export interface THttpPostClient<T, R> {
  post(params: TRequestHttpPostParams<T>): Promise<HttpResponse<R>>;
}
