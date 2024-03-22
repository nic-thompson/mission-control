const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  process.env.MONGO_URL ||
  'mongodb+srv://aws:yv5PDlCd4mHZ4g3x@cluster0.ozellin.mongodb.net/mission-control?retryWrites=true&w=majority&appName=Cluster0';

const server = http.createServer(app);

mongoose.connection.once('connected', () => {
  console.log('Mongoose connected!');
});

mongoose.connection.once('disconnected', () => {
  console.log('Mongoose disconnected!');
});

mongoose.connection.once('error', (error) => {
  console.error(error);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
}

startServer();
