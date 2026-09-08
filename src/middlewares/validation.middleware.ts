import { Product } from '../models/product.model';
import { productController } from '../controllers/product.controller';

describe('Product Model', () => {
  it('should create a product with valid data', async () => {
    const product = new Product({
      name: 'Product 1',
      price: 100,
      stock: 10,
      category: 'Category 1'
    });
    await product.save();
    expect(product.name).toBe('Product 1');
  });
});