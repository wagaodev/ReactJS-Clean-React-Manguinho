import { faker } from '@faker-js/faker';

export type User = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  birthdate: Date;
  registeredAt: Date;
};

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.past(30),
    registeredAt: faker.date.past(2),
  };
}

export function generateBodyRequestPostParams(quantity: number): User[] {
  const usersList: User[] = [];
  Array.from({ length: quantity }).forEach(() => {
    usersList.push(createRandomUser());
  });
  return usersList;
}
