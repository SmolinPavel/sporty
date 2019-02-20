"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.configurePassport = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _config = require("../config");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: _config.SECRET
};

var configurePassport = function configurePassport(passport) {
  return passport.use(new _passportJwt.Strategy(opts, function (jwtPayload, done) {
    _User.default.findById(jwtPayload.id).then(function (user) {
      if (user) {
        return done(null, user);
      }

      return done(null, false);
    }).catch(function (err) {
      return console.log(err);
    });
  }));
};

exports.configurePassport = configurePassport;

var _default = function _default(app) {
  app.use(_passport.default.initialize());
  configurePassport(_passport.default);
};

exports.default = _default;