const express = require('express');
const app = express();


app.get('/', (req, res, next) => {
  res.download('package.json');
});

app.listen(3000);