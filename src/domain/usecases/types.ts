import { AccountModel } from '../models/types';

type TAuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: TAuthenticationParams): Promise<AccountModel>;
}
