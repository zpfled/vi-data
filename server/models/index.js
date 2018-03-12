'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[ env ];
const db = require('../../db/config');

const MODELS = [
	'Game',
	'Play',
	'Player',
	'Season',
	'Team'
];

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[ config.use_env_variable ]);
} else {
	sequelize = new Sequelize(
		config.database, config.username, config.password, config
	);
}

//iterate through list of model names, and load each one with Sequelize
MODELS.forEach(modelName => {
	db[ modelName ] = sequelize[ 'import' ](`./${modelName}`);
});

//once all models are loaded with sequelize, run the association functions to set up associations
MODELS.forEach(modelName => {
	if (db[ modelName ].associate) {
		db[ modelName ].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
