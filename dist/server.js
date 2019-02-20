"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _constants = require("./constants");

var _config = require("./config");

var _configuration = _interopRequireDefault(require("./configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _configuration.default)(app);
var port = _config.port || _constants.DEFAULT_APP_PORT;
app.listen(port, function () {
  return console.log("Listening on port: ".concat(port));
});
var _default = app;
exports.default = _default;