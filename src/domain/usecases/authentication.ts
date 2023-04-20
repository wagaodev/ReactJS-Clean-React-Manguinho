import { TAccountModel } from '@/domain/models/types';

export type TAuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: TAuthenticationParams): Promise<TAccountModel>;
}
