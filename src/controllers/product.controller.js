import { ProductService } from '../services/product.service.js';

export const getProducts = async (req, res) => {
  try {
    const response = await ProductService.getProducts(req);
    res.json(response);
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.pid);
    res.json({ status: 'success', payload: product });
  } catch (error) {
    const status = error.message === 'Product not found' ? 404 : 500;
    res.status(status).json({ status: 'error', message: error.message });
  }
};