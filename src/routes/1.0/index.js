import { Router } from 'express';
import passport from 'passport';

import fields from './fields';
import users from './users';

const routeConfigs = [fields, users];

const router = Router();

routeConfigs.forEach(routeConfig => routeConfig.public && routeConfig.public(router));

// Check auth
router.use(passport.authenticate('jwt', { session: false }));

routeConfigs.forEach(routeConfig => routeConfig.private && routeConfig.private(router));

export default router;
