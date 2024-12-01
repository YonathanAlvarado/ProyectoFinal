import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.config.js';
import { configureHandlebars } from './config/handlebars.config.js';
import { configureMiddleware } from './config/middleware.config.js';
import { configureRoutes } from './config/routes.config.js';
import { errorHandler } from './middleware/error.handler.js';

const app = express();
const PORT = process.env.PORT || 3000;


connectDB();


configureMiddleware(app);
configureHandlebars(app);


configureRoutes(app);


app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});