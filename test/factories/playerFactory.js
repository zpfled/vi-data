import { createTeam } from './teamFactory';

const { Player } = require('../../server/models');

export function buildPlayer (attrs) {
	return Player.build(getPlayerAttributes(attrs));
}

export async function createPlayer (attrs = {}) {
	const illini = await createTeam();
	return Player.create(getPlayerAttributes({ team: illini.id, ...attrs }));
}

export function getPlayerAttributes (overrides = {}) {
	return {
		firstName: 'Trent',
		lastName: 'Frazier',
		height: '6\'3"',
		position: 'PG',
		highSchool: 'Wellington',
		city: 'Miami',
		state: 'FL',
		...overrides
	};
}