"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../models");

var getAll = function getAll(req, res) {
  _models.Field.find().populate('user', ['name', 'avatar']).then(function (profiles) {
    if (!profiles) {
      return res.status(404).json({
        nofield: 'There are no fields'
      });
    }

    res.json(profiles);
  }).catch(function () {
    return res.status(404).json({
      field: 'There are no fields'
    });
  });
};

var getById = function getById(req, res) {
  var id = req.params.id;

  _models.Field.findOne({
    _id: id
  }).populate('user', ['name', 'avatar']).then(function (field) {
    if (!field) {
      res.status(404).json({
        nofield: 'There is no field with this id'
      });
    }

    res.json(field);
  }).catch(function (err) {
    return res.status(404).json({
      field: 'There is no field with this id'
    });
  });
};

var create = function create(req, res) {
  var id = req.user.id;
  var _req$body = req.body,
      name = _req$body.name,
      lat = _req$body.lat,
      long = _req$body.long;
  var newFieldData = {
    user: id,
    name: name,
    location: {
      lat: lat,
      long: long
    }
  }; // Check if field exists

  _models.Field.findOne({
    name: name
  }).then(function (field) {
    if (field) {
      res.status(400).json({
        name: 'Field with this name already exists'
      });
    }

    console.log(req.body);
    console.log(newFieldData); // Save Field

    new _models.Field(newFieldData).save().then(function (field) {
      return res.json(field);
    }).catch(function (err) {
      return console.log(err.message);
    });
  });
};

var _default = {
  create: create,
  getAll: getAll,
  getById: getById
};
exports.default = _default;