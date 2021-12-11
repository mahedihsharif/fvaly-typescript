import { IProduct } from 'types';
import requests from './httpService';

class ProductService {
  getProducts(): Promise<any> {
    return requests.get('/product');
  }

  getProductById(id: string): Promise<any> {
    return requests.get(`/product/${id}`);
  }

  addProduct(body: {}): Promise<any> {
    return requests.post('/product/', body);
  }

  updateProduct(id: string, body: {}): Promise<any> {
    return requests.patch(`/product/${id}`, body);
  }

  deleteProduct(id: string): Promise<any> {
    return requests.delete(`/product/${id}`);
  }
}

export default new ProductService();
