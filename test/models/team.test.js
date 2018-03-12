import { createGame } from '../factories/gameFactory';
import { createPlayer } from '../factories/playerFactory';
import { buildTeam, createTeam, getTeamAttributes } from '../factories/teamFactory';
import { syncDatabase } from '../helpers/syncDatabase';

const { Team } = require('../../server/models');

syncDatabase();

describe('Team', () => {
	describe('attributes', () => {
		it('has a name', async () => {
			const team = await buildTeam();
			expect(team.name).toEqual(getTeamAttributes().name);
		});

		it('has a school', async () => {
			const team = await buildTeam();
			expect(team.school).toEqual(getTeamAttributes().school);
		});
	});

	describe('associations', () => {
		it('has many home games', async () => {
			const team = await createTeam();
			const gameOne = await createGame({ homeTeamId: team.id });
			const gameTwo = await createGame({ homeTeamId: team.id });
			const gameThree = await createGame({ homeTeamId: team.id + 1 });
			const homeGames = await team.getHomeGames();
			expect(homeGames.length).toEqual(2);
		});

		it('has many away games', async () => {
			const team = await createTeam();
			const gameOne = await createGame({ awayTeamId: team.id });
			const gameTwo = await createGame({ awayTeamId: team.id });
			const gameThree = await createGame({ awayTeamId: team.id + 1 });
			const awayGames = await team.getAwayGames();
			expect(awayGames.length).toEqual(2);
		});

		it('has many players', async () => {
			const team = await createTeam();
			const playerOne = await createPlayer({ teamId: team.id });
			const playerTwo = await createPlayer({ teamId: team.id });
			const players = await team.getPlayers();
			expect(players.length).toEqual(2);
		});
	});
});