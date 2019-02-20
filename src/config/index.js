import 'dotenv/config';

const ENV = process.env;

export const { MONGO_URL, port, SECRET } = ENV;
