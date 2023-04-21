import { AxiosHttpClient } from './axios.http-client';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AxiosHttpClient', () => {
  const URLFaker = faker.internet.url();
  test('Should call axios with correct URL', async () => {
    const sut = new AxiosHttpClient();
    await sut.post({ url: URLFaker });
    expect(mockedAxios).toHaveBeenCalledWith(URLFaker);
  });
});
