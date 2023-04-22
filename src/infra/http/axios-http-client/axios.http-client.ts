import { TRequestHttpPostParams } from '@/data/protocols';
import axios from 'axios';

export class AxiosHttpClient {
  async post(params: TRequestHttpPostParams<any>): Promise<void> {
    await axios.post(params.url, params.body);
  }
}
