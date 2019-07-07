// lib/app.ts
import router from './routes';
import db from './db/db';
import mongoose from 'mongoose';
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.use(router);

const uri: string = 'mongodb://localhost:27017/local'

const port = process.env.PORT || 3000;

mongoose.connect(uri, { useNewUrlParser: true }, function(err: any) {
  if (err) {
    console.log(err);
  }
  else {
    app.listen(port, function () {
      console.log('Example app listening on port ' + port + '!');
    })
  }
});