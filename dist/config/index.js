"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET = exports.MONGO_URL = void 0;

require("dotenv/config");

var ENV = process.env;
var MONGO_URL = ENV.MONGO_URL,
    SECRET = ENV.SECRET;
exports.SECRET = SECRET;
exports.MONGO_URL = MONGO_URL;