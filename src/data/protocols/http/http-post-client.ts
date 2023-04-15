import { TRequestHttpPostClient } from './types';

export interface THttpPostClient {
  post(params: TRequestHttpPostClient): Promise<void>;
}
// I use each interface with one single responsability following a solid method
// of Interface segregation principle.
