"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bodyParser = require("body-parser");

var _default = function _default(app) {
  app.use((0, _bodyParser.urlencoded)({
    extended: false
  }));
  app.use((0, _bodyParser.json)());
};

exports.default = _default;