"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("./bodyParser"));

var _db = _interopRequireDefault(require("./db"));

var _routing = _interopRequireDefault(require("./routing"));

var _passport = _interopRequireDefault(require("./passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(app) {
  app.use((0, _cors.default)());
  (0, _bodyParser.default)(app);
  (0, _db.default)();
  (0, _passport.default)(app);
  (0, _routing.default)(app);
};

exports.default = _default;