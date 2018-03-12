import { createGame } from '../factories/gameFactory';
import { createPlayer } from '../factories/playerFactory';
import { buildPlay, createPlay, getPlayAttributes } from '../factories/playFactory';
import { syncDatabase } from '../helpers/syncDatabase';

const { Play } = require('../../server/models');

syncDatabase();

describe('Play', () => {
	describe('attributes', () => {
		it('has a period', async () => {
			const play = await buildPlay();
			expect(play.period).toEqual(getPlayAttributes().period);
		});

		it('has a description', async () => {
			const play = await buildPlay();
			expect(play.description).toEqual(getPlayAttributes().description);
		});

		it('has a clock', async () => {
			const play = await buildPlay();
			expect(play.clock).toEqual(getPlayAttributes().clock);
		});

		it('has a stat', async () => {
			const play = await buildPlay();
			expect(play.stat).toEqual(getPlayAttributes().stat);
		});

		it('has a awayScore', async () => {
			const play = await buildPlay();
			expect(play.awayScore).toEqual(getPlayAttributes().awayScore);
		});

		it('has a homeScore', async () => {
			const play = await buildPlay();
			expect(play.homeScore).toEqual(getPlayAttributes().homeScore);
		});
	});

	describe('associations', () => {
		it('belongs to a game', async () => {
			const game = await createGame();
			const play = await createPlay({ gameId: game.id });
			const playGame = await play.getGame();
			expect(playGame.id).toEqual(game.id);
		});

		it('belongs to a player', async () => {
			const player = await createPlayer();
			const play = await createPlay({ playerId: player.id });
			const playPlayer = await play.getPlayer();
			expect(playPlayer.id).toEqual(player.id);
		});
	});
});