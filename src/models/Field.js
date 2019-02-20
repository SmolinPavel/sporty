import { model, Schema } from 'mongoose';

const FieldSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['point', 'area'],
      default: 'point',
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  rating: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      value: {
        type: Number,
      },
    },
  ],
  type: {
    type: String,
    enum: ['free', 'paid'],
    default: 'free',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
  },
  description: {
    type: String,
  },
  info: {
    phones: [
      {
        type: String,
      },
    ],
    url: {
      type: String,
    },
    photos: [
      {
        type: String,
      },
    ],
  },
});

const Field = model('field', FieldSchema);

export default Field;
