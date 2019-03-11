"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controllers = require("../../controllers");

var PREFIX = '/fields';
var create = _controllers.fields.create,
    deleteById = _controllers.fields.deleteById,
    getAll = _controllers.fields.getAll,
    getById = _controllers.fields.getById;
var _default = {
  public: function _public(router) {
    router.get("".concat(PREFIX, "/"), getAll);
    router.get("".concat(PREFIX, "/:id"), getById);
  },
  private: function _private(router) {
    router.post("".concat(PREFIX, "/create"), create);
    router.delete("".concat(PREFIX, "/delete/:id"), deleteById);
  }
};
exports.default = _default;