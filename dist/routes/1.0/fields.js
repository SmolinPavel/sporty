"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controllers = require("../../controllers");

var PREFIX = '/fields';
var create = _controllers.fields.create,
    getAll = _controllers.fields.getAll,
    getById = _controllers.fields.getById;
var _default = {
  public: function _public(router) {
    router.get("".concat(PREFIX, "/"), getAll);
    router.get("".concat(PREFIX, "/:id"), getById);
  },
  private: function _private(router) {
    router.post("".concat(PREFIX, "/create"), create);
  }
};
exports.default = _default;