// import db from '../../src/db/config';
const db = require('../../src/db/config');

db.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:', err));