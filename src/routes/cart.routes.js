import { Router } from 'express';
import {
  getCart,
  removeProductFromCart,
  updateCart,
  updateProductQuantity,
  clearCart
} from '../controllers/cart.controller.js';

const router = Router();

router.get('/:cid', getCart);
router.delete('/:cid/products/:pid', removeProductFromCart);
router.put('/:cid', updateCart);
router.put('/:cid/products/:pid', updateProductQuantity);
router.delete('/:cid', clearCart);

export default router;