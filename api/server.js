/*
  The main file from the server which is responsible for
  loading middleware, import modules and packages,
  managing the connection to the database
  and running the http server.
*/

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const routes = require('./routes');
const { logger } = require('./utils/logger');
const handleErrors = require('./middlewares/errorHandler');

// Express configuration section
const app = express();
const port = process.env.PORT;

// Database configuration section
const url = process.env.MONGODB_URL;
const dbName = process.env.DATABASE_NAME;

// body-parser works as middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB with MongoClient
MongoClient.connect(url, (err, client) => {
  const db = client.db(dbName);
  const notesCollection = db.collection(process.env.DATABASE_COLLECTION);

  app.locals.notesCollection = notesCollection;
});

// Route handler for express
app.use('/', routes);

app.use(handleErrors);

app.listen(port, () => {
  logger.info(`API listening at http://localhost:${port}`);
});
