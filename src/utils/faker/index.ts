import { faker } from '@faker-js/faker';

export type TDomain = {
  domainUrl: string;
};

export const fakerUrl = (): TDomain => {
  return {
    domainUrl: faker.internet.url(),
  };
};
