import { TAuthenticationParams } from '@/domain/usecases/types';
import { faker } from '@faker-js/faker';
import { TAccountModel } from '../models/types';

export const mockAuthentication = (): TAuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): TAccountModel => ({
  accessToken: faker.datatype.uuid(),
});
