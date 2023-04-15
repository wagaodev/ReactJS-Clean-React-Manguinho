import { faker } from '@faker-js/faker';
import { TAuthenticationParams } from '../../usecases/authentication';

export const mockAuthentication = (): TAuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
