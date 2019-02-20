import { json, urlencoded } from 'body-parser';

export default app => {
  app.use(urlencoded({ extended: false }));
  app.use(json());
};
