const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(express.static('public'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on port ${port}`);
});
