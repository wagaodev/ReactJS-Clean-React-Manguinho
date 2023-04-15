import { AccountModel } from '../models/account-model';

type TAuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: TAuthenticationParams): Promise<AccountModel>;
}
