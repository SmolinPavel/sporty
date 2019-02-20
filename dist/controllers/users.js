"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _models = require("../models");

var _config = require("../config");

var _constants = require("../constants");

var test = function test(req, res) {
  return res.json({
    msg: 'Users endpoint works with controller!!!'
  });
};

var register = function register(req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      name = _req$body.name,
      password = _req$body.password;

  _models.User.findOne({
    email: email
  }).then(function (user) {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    } else {
      var newUser = new _models.User({
        name: name,
        email: email
      });
      (0, _bcryptjs.genSalt)(10, function (err, salt) {
        (0, _bcryptjs.hash)(password, salt, function (err, hash) {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(function (user) {
            var id = user.id,
                name = user.name,
                avatar = user.avatar;
            var payload = {
              id: id,
              name: name,
              avatar: avatar
            }; // Sign the token

            var token = (0, _jsonwebtoken.sign)(payload, _config.SECRET, {
              expiresIn: _constants.JWT_EXPIRATION_TIME
            });
            return res.json({
              success: true,
              token: token
            });
            res.json(user);
          }).catch(function (err) {
            return console.log(err);
          });
        });
      });
    }
  });
};

var login = function login(req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password; // Find user by email

  _models.User.findOne({
    email: email
  }).then(function (user) {
    // Check for user
    if (!user) {
      return res.status(404).json({
        email: 'User not found'
      });
    }

    var avatar = user.avatar,
        id = user.id,
        name = user.name; // Check password

    (0, _bcryptjs.compare)(password, user.password).then(function (isMatch) {
      if (isMatch) {
        // User Matched
        var payload = {
          id: id,
          name: name,
          avatar: avatar
        }; // Create JWT Payload
        // Sign the token

        var token = (0, _jsonwebtoken.sign)(payload, _config.SECRET, {
          expiresIn: _constants.JWT_EXPIRATION_TIME
        });
        return res.json({
          success: true,
          token: token
        });
      } else {
        return res.status(400).json({
          password: 'Password incorrect'
        });
      }
    });
  });
};

var current = function current(req, res) {
  return res.json(req.user);
};

var _default = {
  current: current,
  login: login,
  register: register,
  test: test
};
exports.default = _default;