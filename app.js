const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>DevOps Capstone</title></head>
      <body style="text-align: center; font-family: sans-serif;">
        <h1>🚀 Continuous Delivery Pipeline Active</h1>
        <p>Node.js App is running inside a Docker Container on AWS EC2.</p>
        <p>Status: <b>Healthy</b></p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});