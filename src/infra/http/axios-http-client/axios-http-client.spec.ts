import axios from 'axios';
import { faker } from '@faker-js/faker';
import { AxiosHttpClient } from './axios.http-client';
import { TRequestHttpPostParams } from '@/data/protocols';
import { generateBodyRequestPostParams } from '@/utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
  data: generateBodyRequestPostParams(),
  status: faker.random.numeric(),
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

// Factory Functions
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): TRequestHttpPostParams<any> => ({
  url: faker.internet.url(),
  body: generateBodyRequestPostParams(),
});

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const sut = makeSut();
    const request = mockPostRequest();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut();
    const THttpResponse = await sut.post(mockPostRequest());
    expect(THttpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
