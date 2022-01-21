const express = require('express');
const routes = require('./routes');

const app = express();

// routes
app.use(routes);

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}

// Export express app
module.exports = app;
