import productRoutes from '../routes/product.routes.js';
import cartRoutes from '../routes/cart.routes.js';
import viewRoutes from '../routes/view.routes.js';

export const configureRoutes = (app) => {
  app.use('/api/products', productRoutes);
  app.use('/api/carts', cartRoutes);
  app.use('/', viewRoutes);
};