import { generateBodyRequestPostParams } from '@/utils';
import { TRequestHttpPostParams } from '../protocols';
import { faker } from '@faker-js/faker';

export const mockPostRequest = (): TRequestHttpPostParams<any> => ({
  url: faker.internet.url(),
  body: generateBodyRequestPostParams(),
});
