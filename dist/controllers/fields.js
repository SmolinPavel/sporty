"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../models");

var getAll = function getAll(req, res) {
  _models.Field.find().populate('user', ['name', 'avatar']).then(function (fields) {
    if (!fields) {
      return res.status(404).json({
        nofield: 'There are no fields'
      });
    }

    res.json(fields);
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
      address = _req$body.address,
      description = _req$body.description,
      lat = _req$body.lat,
      long = _req$body.long,
      name = _req$body.name,
      phones = _req$body.phones,
      photos = _req$body.photos,
      type = _req$body.type,
      url = _req$body.url;
  var newFieldData = {
    user: id,
    name: name,
    location: {
      lat: lat,
      long: long
    },
    info: {}
  };
  if (address) newFieldData.address = address;
  if (description) newFieldData.description = description;
  if (photos) newFieldData.info.photos = photos.replace(/\s/g, '').split(',');
  if (phones) newFieldData.info.phones = phones.replace(/\s/g, '').split(',');
  if (type) newFieldData.type = type;
  if (url) newFieldData.info.url = url; // Check if field exists

  _models.Field.findOne({
    name: name
  }).then(function (field) {
    if (field) {
      res.status(400).json({
        name: 'Field with this name already exists'
      });
    } // Save Field


    new _models.Field(newFieldData).save().then(function (field) {
      return res.json(field);
    }).catch(function (err) {
      return console.log(err.message);
    });
  });
};

var deleteById = function deleteById(req, res) {
  var userId = req.user.id;
  var id = req.params.id;

  _models.Field.findById(id).then(function (field) {
    // Check for field owner
    if (field.user.toString() !== userId) {
      return res.status(401).json({
        notauthorized: 'User not authorized'
      });
    } // Delete


    return field.remove();
  }).then(function () {
    return res.json({
      success: true
    });
  }).catch(function (err) {
    return res.status(404).json({
      postnotfound: 'No field found'
    });
  });
};

var _default = {
  create: create,
  deleteById: deleteById,
  getAll: getAll,
  getById: getById
};
exports.default = _default;