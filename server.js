const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // folder z plikami statycznymi

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
