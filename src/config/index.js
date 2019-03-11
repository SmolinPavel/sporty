require("dotenv/config");

const ENV = process.env;

export const { MONGO_URL, SECRET } = ENV;
