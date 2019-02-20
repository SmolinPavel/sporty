"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _mongoose.default.connect(_config.MONGO_URL, {
    useNewUrlParser: true
  }).then(function () {
    return console.log('connected to MongoDB');
  }).catch(function (err) {
    return console.log(err);
  });
};

exports.default = _default;