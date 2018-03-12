import { createGame } from './gameFactory';
import { createPlayer } from './playerFactory';

const { Play } = require('../../server/models');

export function buildPlay (attrs) {
	return Play.build(getPlayAttributes(attrs));
}

export async function createPlay (attrs = {}) {
	const trent = createPlayer();
	const game = createGame();
	return Play.create(getPlayAttributes({ playerId: trent.id, gameId: game.id, ...attrs })
	);
}

export function getPlayAttributes (overrides = {}) {
	return {
		period: 1,
		description: "Miles Bridges made Three Point Jumper.",
		clock: "18:58",
		stat: "3PM",
		awayScore: 3,
		homeScore: 3,
		...overrides
	};
}