import { buildGame, createGame } from '../factories/gameFactory';
import { createSeason } from '../factories/seasonFactory';
import { createTeam } from '../factories/teamFactory';
import { syncDatabase } from '../helpers/syncDatabase';

const { Game } = require('../../server/models');

syncDatabase();

describe('Game', () => {
	describe('attributes', () => {
		it('can be a conference game or not', async () => {
			const game = await buildGame({ conference: true });
			const nonConGame = await buildGame({ conference: false });

			expect(game.conference).toEqual(true);
			expect(nonConGame.conference).toEqual(false);
		});

		it('has a date', async () => {
			const dateString = '02/20/2018';
			const game = await buildGame({ date: dateString });
			expect(game.date).toEqual(new Date(dateString));
		});
	});

	it('can be a neutral court game or not', async () => {
		const game = await buildGame({ neutral: false });
		const neutralCourtgame = await buildGame({ neutral: true });

		expect(game.neutral).toEqual(false);
		expect(neutralCourtgame.neutral).toEqual(true);
	});

	it('can be a neutral court game or not', async () => {
		const game = await buildGame({ postSeason: false });
		const tourneygame = await buildGame({ postSeason: true });

		expect(game.postSeason).toEqual(false);
		expect(tourneygame.postSeason).toEqual(true);
	});

	it('has a time', async () => {
		const expected = '18:00:00';
		const game = await buildGame({ time: expected });
		expect(game.time).toEqual(expected);
	});
});

describe('associations', () => {
	it('belongs to an away team', async () => {
		const team = await createTeam();
		const game = await createGame({ awayTeamId: team.id });
		const awayTeamId = await game.getAwayTeam();
		expect(awayTeamId.id).toEqual(team.id);
	});

	it('belongs to a home team', async () => {
		const team = await createTeam();
		const game = await createGame({ homeTeamId: team.id });
		const homeTeamId = await game.getHomeTeam();
		expect(homeTeamId.id).toEqual(team.id);
	});

	it('belongs to a season', async () => {
		const season = await createSeason();
		const game = await createGame({ seasonId: season.id });
		const gameSeason = await game.getSeason();
		expect(gameSeason.id).toEqual(season.id);
	});
});