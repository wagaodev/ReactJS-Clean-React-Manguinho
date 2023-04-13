import { AccountModel } from 'domain/models/account-model/types';

type TAuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: TAuthenticationParams): Promise<AccountModel>;
}
