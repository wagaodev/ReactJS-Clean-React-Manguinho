import { AccountModel } from '../models/account-model';

export type TAuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: TAuthenticationParams): Promise<AccountModel>;
}
