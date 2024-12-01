import { Cart } from '../models/cart.model.js';

export class CartService {
  static async getCart(cartId) {
    try {
      const cart = await Cart.findById(cartId).populate('items.product');
      if (!cart) {
        throw new Error('Cart not found');
      }
      return cart;
    } catch (error) {
      throw new Error(`Error fetching cart: ${error.message}`);
    }
  }

  static async removeProduct(cartId, productId) {
    try {
      return await Cart.findByIdAndUpdate(
        cartId,
        { $pull: { items: { product: productId } } },
        { new: true }
      ).populate('items.product');
    } catch (error) {
      throw new Error(`Error removing product from cart: ${error.message}`);
    }
  }

  static async updateCart(cartId, items) {
    try {
      return await Cart.findByIdAndUpdate(
        cartId,
        { items },
        { new: true }
      ).populate('items.product');
    } catch (error) {
      throw new Error(`Error updating cart: ${error.message}`);
    }
  }

  static async updateProductQuantity(cartId, productId, quantity) {
    try {
      return await Cart.findOneAndUpdate(
        { _id: cartId, 'items.product': productId },
        { $set: { 'items.$.quantity': quantity } },
        { new: true }
      ).populate('items.product');
    } catch (error) {
      throw new Error(`Error updating product quantity: ${error.message}`);
    }
  }

  static async clearCart(cartId) {
    try {
      return await Cart.findByIdAndUpdate(
        cartId,
        { items: [] },
        { new: true }
      );
    } catch (error) {
      throw new Error(`Error clearing cart: ${error.message}`);
    }
  }
}