import cors from 'cors';

import configBodyParser from './bodyParser';
import configureDatabase from './db';
import configureRoutes from './routing';
import configurePassport from './passport';

export default app => {
  app.use(cors());
  configBodyParser(app);
  configureDatabase();
  configurePassport(app);
  configureRoutes(app);
};
