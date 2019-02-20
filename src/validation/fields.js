import Validator from 'validator';

import { isEmpty } from '../helpers';

export const validateField = (req, res, next) => {
  const errors = {};

  let { name } = req.body;

  name = !isEmpty(name) ? name : '';

  if (!Validator.isLength(name, { min: 2, max: 40 })) {
    errors.handle = 'Field name must be between 2 and 40 characters';
  }

  if (!isEmpty(errors)) {
    return res.status(404).json(errors);
  }

  next();
};
