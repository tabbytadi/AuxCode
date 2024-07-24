const express = require('express');
const app = express();
const port = 3000;

const dataRoutes = require('./routes/data');

app.use('/api/data', dataRoutes);

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});