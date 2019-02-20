"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRegisterInput = exports.validateLoginInput = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateLoginInput = function validateLoginInput(req, res, next) {
  var errors = {};
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  email = !(0, _helpers.isEmpty)(email) ? email : '';
  password = !(0, _helpers.isEmpty)(password) ? password : '';

  if (!_validator.default.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (_validator.default.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  if (_validator.default.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  if (!(0, _helpers.isEmpty)(errors)) {
    return res.status(404).json(errors);
  }

  next();
};

exports.validateLoginInput = validateLoginInput;

var validateRegisterInput = function validateRegisterInput(req, res, next) {
  var errors = {};
  var _req$body2 = req.body,
      email = _req$body2.email,
      name = _req$body2.name,
      password = _req$body2.password,
      password2 = _req$body2.password2;
  email = !(0, _helpers.isEmpty)(email) ? email : '';
  name = !(0, _helpers.isEmpty)(name) ? name : '';
  password = !(0, _helpers.isEmpty)(password) ? password : '';
  password2 = !(0, _helpers.isEmpty)(password2) ? password2 : '';

  if (!_validator.default.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (_validator.default.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  if (!_validator.default.isLength(name, {
    min: 2,
    max: 30
  })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (_validator.default.isEmpty(name)) {
    errors.name = 'Name field is required';
  }

  if (!_validator.default.isLength(password, {
    min: 6,
    max: 30
  })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (_validator.default.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  if (!_validator.default.equals(password, password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (_validator.default.isEmpty(password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!(0, _helpers.isEmpty)(errors)) {
    return res.status(404).json(errors);
  }

  next();
};

exports.validateRegisterInput = validateRegisterInput;