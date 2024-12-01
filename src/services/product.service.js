import { Product } from '../models/product.model.js';
import { getPaginationOptions, createPaginatedResponse } from '../utils/pagination.js';
import { buildProductQuery } from '../utils/query-builder.js';

export class ProductService {
  static async getProducts(req) {
    try {
      const options = getPaginationOptions(req);
      const query = buildProductQuery(req.query);
      const result = await Product.paginate(query, options);
      
      const baseUrl = `${req.protocol}://${req.get('host')}${req.baseUrl}`;
      return createPaginatedResponse(result, req, baseUrl);
    } catch (error) {
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }

  static async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }
  }

  static async getCategories() {
    try {
      return await Product.distinct('category');
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }
}