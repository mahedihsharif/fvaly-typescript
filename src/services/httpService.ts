import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://fvaly.herokuapp.com/api',
  timeout: 15000,
});

const responseBody = (res: AxiosResponse) => res.data.data;

// export const get=(url: string) => instance.get(url).then(responseBody)

// export const post=(url: string, body:object) => instance.post(url, body).then(responseBody)

// export const patch=(url: string, body:object) => instance.patch(url, body).then(responseBody)

// export const _delete=(url: string) => instance.delete(url).then(responseBody)

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),
  patch: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
