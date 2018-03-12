import { createSeason } from './seasonFactory';
import { createTeam } from './teamFactory';

const { Game } = require('../../server/models');

export function buildGame (attrs) {
	return Game.build(getGameAttributes(attrs));
}

export async function createGame (attrs = {}) {
	const season = await createSeason();
	const illini = await createTeam();
	const hoosiers = await createTeam({ name: 'Hoosiers', school: 'Indiana' });
	return Game.create(
		getGameAttributes({
			seasonId: season.id,
			homeTeamId: illini.id,
			awayTeamId: hoosiers.id,
			...attrs
		})
	);
}

export function getGameAttributes (overrides = {}) {
	return {
		conference: true,
		date: '02/20/2018',
		neutral: false,
		postSeason: false,
		time: '6:00 PM',
		...overrides
	};
}