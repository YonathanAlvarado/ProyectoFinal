import { Router } from 'express';
import { ProductService } from '../services/product.service.js';
import { CartService } from '../services/cart.service.js';

const router = Router();

router.get('/products', async (req, res, next) => {
  try {
    const response = await ProductService.getProducts(req);
    const categories = await ProductService.getCategories();
    res.render('products', { ...response, categories });
  } catch (error) {
    next(error);
  }
});

router.get('/products/:pid', async (req, res, next) => {
  try {
    const product = await ProductService.getProductById(req.params.pid);
    res.render('product-detail', { product });
  } catch (error) {
    next(error);
  }
});

router.get('/cart/:cid', async (req, res, next) => {
  try {
    const cart = await CartService.getCart(req.params.cid);
    res.render('cart', { cart });
  } catch (error) {
    next(error);
  }
});

export default router;