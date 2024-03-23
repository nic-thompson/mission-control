const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('connected', () => {
  console.log('Mongoose connected!');
});

mongoose.connection.once('disconnected', () => {
  console.log('Mongoose disconnected!');
});

mongoose.connection.once('error', (error) => {
  console.error(error);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
