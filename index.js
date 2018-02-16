// const app = require('./server/server');
// const config = require('./server/config/config');
//
// // Start listening
// app.listen(config.port, () => {
//   console.log('Sever started http://localhost:%s', config.port);
// });


const http = require('http');
const app = require('./server/app'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);