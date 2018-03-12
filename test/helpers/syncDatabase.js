export function syncDatabase () {
	const { sequelize } = require('../../server/models');
	return () => sequelize.sync({ force: true });
}

export function closeDatabaseConnection () {
	const { sequelize } = require('../../server/models');
	return () => sequelize.close();
}
