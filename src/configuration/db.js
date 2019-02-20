import mongoose from 'mongoose';
import { MONGO_URL } from '../config';

export default () =>
  mongoose
    .connect(
      MONGO_URL,
      { useNewUrlParser: true }
    )
    .then(() => console.log('connected to MongoDB'))
    .catch(err => console.log(err));
