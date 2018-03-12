const { Team } = require('../../server/models');

export function buildTeam (attrs) {
	return Team.build(getTeamAttributes(attrs));
}

export function createTeam (attrs) {
	return Team.create(getTeamAttributes(attrs));
}

export function getTeamAttributes (overrides = {}) {
	return {
		name: 'Fighting Illini',
		school: 'Illinois'
	};
}