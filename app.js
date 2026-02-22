const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Capstone Project Successfully Deployed!</h1><p>Running on Docker via Jenkins Pipeline.</p>');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
