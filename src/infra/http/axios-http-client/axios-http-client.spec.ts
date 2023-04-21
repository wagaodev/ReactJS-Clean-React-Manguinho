import { AxiosHttpClient } from './axios.http-client';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Factory Functions
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe('AxiosHttpClient', () => {
  const URLFaker = faker.internet.url();
  test('Should call axios with correct URL and verb', async () => {
    const sut = makeSut();
    await sut.post({ url: URLFaker });
    expect(mockedAxios.post).toHaveBeenCalledWith(URLFaker);
  });
});
