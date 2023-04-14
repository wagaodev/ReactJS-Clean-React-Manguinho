import { HttpPostClientSpy } from '../../test/mock-http-client';
import { RemoteAuthentication } from './remote-authentication';

type TSut = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

// Design Pattern Factory
const makeSut = (url: string = 'any_url'): TSut => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    httpPostClientSpy,
    sut,
  };
};

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'other_url';
    const { httpPostClientSpy, sut } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
