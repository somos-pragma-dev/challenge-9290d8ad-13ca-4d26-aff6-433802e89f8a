import request from 'supertest';
import app from '../index';

describe('Product Routes', () => {
  it('should create a product', async () => {
    const response = await request(app)
     .post('/products')
     .send({
        name: 'Product 1',
        price: 100,
        stock: 10,
        category: 'Category 1'
      });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Product 1');
  });
});