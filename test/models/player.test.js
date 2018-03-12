import { buildPlayer, createPlayer, getPlayerAttributes } from '../factories/playerFactory';
import { createTeam } from '../factories/teamFactory';
import { syncDatabase } from '../helpers/syncDatabase';

const { Player } = require('../../server/models');

syncDatabase();

describe('Player', () => {
	describe('attributes', () => {
		it('has a firstName', async () => {
			const play = await buildPlayer();
			expect(play.firstName).toEqual(getPlayerAttributes().firstName);
		});

		it('has a lastName', async () => {
			const play = await buildPlayer();
			expect(play.lastName).toEqual(getPlayerAttributes().lastName);
		});

		it('has a height', async () => {
			const play = await buildPlayer();
			expect(play.height).toEqual(getPlayerAttributes().height);
		});

		it('has a position', async () => {
			const play = await buildPlayer();
			expect(play.position).toEqual(getPlayerAttributes().position);
		});

		it('has a highSchool', async () => {
			const play = await buildPlayer();
			expect(play.highSchool).toEqual(getPlayerAttributes().highSchool);
		});

		it('has a city', async () => {
			const play = await buildPlayer();
			expect(play.city).toEqual(getPlayerAttributes().city);
		});

		it('has a state', async () => {
			const play = await buildPlayer();
			expect(play.state).toEqual(getPlayerAttributes().state);
		});
	});

	describe('associations', () => {
		it('belongs to a team', async () => {
			const team = await createTeam();
			const player = await createPlayer({ teamId: team.id });
			const playerTeam = await player.getTeam();
			expect(playerTeam.id).toEqual(team.id);
		});
	});
});