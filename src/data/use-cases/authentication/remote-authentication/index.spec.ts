import { THttpPostClient } from './types';

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: THttpPostClient,
  ) {}

  async auth(): Promise<void> {}
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url';
    const httpClient = HttpPostClient();
    const sut = new RemoteAuthentication(url, httpClient);
    await sut.auth();
    expect(httpClient.url).toBe(url);
  });
});
