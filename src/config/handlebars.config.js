import { engine } from 'express-handlebars';

export const configureHandlebars = (app) => {
  app.engine('handlebars', engine({
    helpers: {
      multiply: (a, b) => a * b
    }
  }));
  app.set('view engine', 'handlebars');
  app.set('views', './src/views');
};