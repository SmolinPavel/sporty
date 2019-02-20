"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var FieldSchema = new _mongoose.Schema({
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['point', 'area'],
      default: 'point'
    },
    lat: {
      type: Number,
      required: true
    },
    long: {
      type: Number,
      required: true
    }
  },
  rating: [{
    user: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    value: {
      type: Number
    }
  }],
  type: {
    type: String,
    enum: ['free', 'paid'],
    default: 'free'
  },
  date: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String
  },
  description: {
    type: String
  },
  info: {
    phones: [{
      type: String
    }],
    url: {
      type: String
    },
    photos: [{
      type: String
    }]
  }
});
var Field = (0, _mongoose.model)('field', FieldSchema);
var _default = Field;
exports.default = _default;