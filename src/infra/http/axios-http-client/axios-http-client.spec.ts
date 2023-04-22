import { AxiosHttpClient } from './axios.http-client';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { TRequestHttpPostParams } from '@/data/protocols';
import { generateBodyRequestPostParams } from '@/utils/create-random-user';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Factory Functions
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): TRequestHttpPostParams<any> => ({
  url: faker.internet.url(),
  body: generateBodyRequestPostParams(1),
});

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const sut = makeSut();
    const request = mockPostRequest();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
  test('Should call axios with correct body', async () => {
    const sut = makeSut();
    const request = mockPostRequest();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
  });
});
