"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controllers = require("../../controllers");

var _validation = require("../../validation");

var PREFIX = '/users';
var _default = {
  public: function _public(router) {
    router.get("".concat(PREFIX, "/test"), _controllers.users.test);
    router.post("".concat(PREFIX, "/register"), _validation.validateRegisterInput, _controllers.users.register);
    router.post("".concat(PREFIX, "/login"), _validation.validateLoginInput, _controllers.users.login);
  },
  private: function _private(router) {
    router.get("".concat(PREFIX, "/current"), _controllers.users.current);
  }
};
exports.default = _default;