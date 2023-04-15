import { faker } from '@faker-js/faker';
import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';
import { mockAuthentication } from '../../../domain/models/test/mock-authentication';

type TSut = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

// Design Pattern Factory
const makeSut = (url: string = faker.internet.url()): TSut => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url();
    const { httpPostClientSpy, sut } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });
  test('Should call HttpPostClient with correct body', async () => {
    const { httpPostClientSpy, sut } = makeSut();
    const authenticationParams = mockAuthentication();
    await sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
});
