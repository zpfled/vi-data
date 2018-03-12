const { Season } = require('../../server/models');

export function buildSeason (attrs) {
	return Season.build(getSeasonAttributes(attrs));
}

export function createSeason (attrs) {
	return Season.create(getSeasonAttributes(attrs));
}

export function getSeasonAttributes (overrides = {}) {
	return {
		start: '11/12/2017',
		end: '03/02/2018'
	};
}