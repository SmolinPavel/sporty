"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateField = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validateField = function validateField(req, res, next) {
  var errors = {};
  var name = req.body.name;
  name = !(0, _helpers.isEmpty)(name) ? name : '';

  if (!_validator.default.isLength(name, {
    min: 2,
    max: 40
  })) {
    errors.handle = 'Field name must be between 2 and 40 characters';
  }

  if (!(0, _helpers.isEmpty)(errors)) {
    return res.status(404).json(errors);
  }

  next();
};

exports.validateField = validateField;