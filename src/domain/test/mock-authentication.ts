import { TAuthenticationParams } from '@/domain/usecases/authentication';
import { faker } from '@faker-js/faker';

export const mockAuthentication = (): TAuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
