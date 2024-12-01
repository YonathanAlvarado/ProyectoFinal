import { CartService } from '../services/cart.service.js';

export const getCart = async (req, res) => {
  try {
    const cart = await CartService.getCart(req.params.cid);
    res.json({ status: 'success', payload: cart });
  } catch (error) {
    const status = error.message === 'Cart not found' ? 404 : 500;
    res.status(status).json({ status: 'error', message: error.message });
  }
};

export const removeProductFromCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const cart = await CartService.removeProduct(cid, pid);
    res.json({ status: 'success', payload: cart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const cart = await CartService.updateCart(req.params.cid, req.body.items);
    res.json({ status: 'success', payload: cart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const updateProductQuantity = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const cart = await CartService.updateProductQuantity(cid, pid, quantity);
    res.json({ status: 'success', payload: cart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    const cart = await CartService.clearCart(req.params.cid);
    res.json({ status: 'success', payload: cart });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};