"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

var _fields = _interopRequireDefault(require("./fields"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeConfigs = [_fields.default, _users.default];
var router = (0, _express.Router)();
routeConfigs.forEach(function (routeConfig) {
  return routeConfig.public && routeConfig.public(router);
}); // Check auth

router.use(_passport.default.authenticate('jwt', {
  session: false
}));
routeConfigs.forEach(function (routeConfig) {
  return routeConfig.private && routeConfig.private(router);
});
var _default = router;
exports.default = _default;