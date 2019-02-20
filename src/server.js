import express from 'express';

import { DEFAULT_APP_PORT } from './constants';
import { port as envPort } from './config';
import configureApp from './configuration';

const app = express();

configureApp(app);

const port = envPort || DEFAULT_APP_PORT;

app.listen(port, () => console.log(`Listening on port: ${port}`));

export default app;
