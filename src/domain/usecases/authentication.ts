import { TAccountModel } from '@/domain/models/types';
import { TAuthenticationParams } from './types';

export interface Authentication {
  auth(params: TAuthenticationParams): Promise<TAccountModel>;
}
