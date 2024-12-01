import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.config.js';
import { configureHandlebars } from './config/handlebars.config.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import viewRoutes from './routes/view.routes.js';
import { errorHandler } from './middleware/error.handler.js';

const app = express();
const PORT = process.env.PORT || 3000;


connectDB();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


configureHandlebars(app);


app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/', viewRoutes);


app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});