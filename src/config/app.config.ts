import { Product } from './models/product.model';

export interface ProductDTO {
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface CreateProductDTO extends ProductDTO {}

export interface UpdateProductDTO extends ProductDTO {}

export interface ProductResponseDTO extends ProductDTO {
  id: string;
}