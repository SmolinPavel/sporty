import express from 'express';

import { DEFAULT_APP_PORT } from './constants';
import configureApp from './configuration';

const app = express();

configureApp(app);

const port = process.env.PORT || DEFAULT_APP_PORT;

app.listen(port, () => console.log(`Listening on port: ${port}`));

export default app;
