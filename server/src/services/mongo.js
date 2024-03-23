const mongoose = require('mongoose');

const MONGO_URL =
  process.env.MONGO_URL ||
  'mongodb+srv://aws:yv5PDlCd4mHZ4g3x@cluster0.ozellin.mongodb.net/mission-control?retryWrites=true&w=majority&appName=Cluster0';

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
