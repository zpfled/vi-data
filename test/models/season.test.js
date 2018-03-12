import { createGame } from '../factories/gameFactory';
import { buildSeason, createSeason, getSeasonAttributes } from '../factories/seasonFactory';
import { syncDatabase } from '../helpers/syncDatabase';

const { Season } = require('../../server/models');

syncDatabase();

describe('Season', () => {
	describe('attributes', () => {
		it('has a start', async () => {
			const play = await buildSeason();
			expect(play.start).toEqual(new Date(getSeasonAttributes().start));
		});

		it('has a end', async () => {
			const play = await buildSeason();
			expect(play.end).toEqual(new Date(getSeasonAttributes().end));
		});
	});

	describe('associations', () => {
		it('has many games', async () => {
			const season = await createSeason();
			const gameOne = await createGame({ seasonId: season.id });
			const gameTwo = await createGame({ seasonId: season.id });
			const seasonGames = await season.getGames();
			expect(seasonGames.length).toEqual(2);
		});
	});
});