// import Sequelize from 'sequelize';
const Sequelize = require('sequelize');

const database = 'vi_data_dev';
const username = 'zachpflederer';
const password = '';
const host = 'localhost';

const db = new Sequelize(database, username, password, {
	host,
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

module.exports = db;
// export default db