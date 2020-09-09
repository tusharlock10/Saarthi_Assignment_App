import axios from 'axios';
import {BASE_URL, HTTP_TIMEOUT} from '../Constants';

export const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: HTTP_TIMEOUT,
});
