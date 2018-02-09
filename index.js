const app = require('./src/server');
const config = require('./src/config/config');

// Start listening
app.listen(config.port, () => {
  console.log('Sever started http://localhost:%s', config.port);
});
