// lib/app.ts
import router from './routes';
import db from './db/db';
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.use(router);

const port = process.env.PORT || 3000;

if (db.connect()) {
  app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
  })
}
else {
  console.log('Unable to connect to mongo');
}