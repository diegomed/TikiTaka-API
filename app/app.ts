// lib/app.ts
import router from './routes';
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});