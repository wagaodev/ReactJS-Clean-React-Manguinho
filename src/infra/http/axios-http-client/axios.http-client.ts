import {
  HttpPostClient,
  THttpResponse,
  TRequestHttpPostParams,
} from '@/data/protocols';
import axios from 'axios';

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: TRequestHttpPostParams<any>): Promise<THttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
