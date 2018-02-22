const db = require('../../server/models');
const { Game, Season, sequelize, Team } = db;

const gameAttrs = {
	conference: true,
	date: '02/20/2018',
	neutral: false,
	postSeason: false,
	time: '6:00 PM'
};

const illiniAttrs = {
	name: 'Fighting Illini',
	school: 'Illinois'
};

const indianaAttrs = {
	name: 'Hoosiers',
	school: 'Indiana'
};

const seasonAttrs = {
	start: '11/12/2017',
	end: '03/02/2018'
};

beforeAll(() => sequelize.sync({ force: true }));
afterAll(() => sequelize.close());

describe('Game', () => {
	describe('attributes', () => {
		it('can be a conference game or not', done => {
			Game.create(gameAttrs)
				.then(game => expect(game.conference).toEqual(true))
				.then(done)
				.catch(done);
		});

		it('has a date', done => {
			Game.create(gameAttrs)
				.then(game => expect(game.date).toEqual(new Date('02/20/2018')))
				.then(done)
				.catch(done);
		});

		it('can be a neutral court game or not', done => {
			Game.create(gameAttrs)
				.then(game => expect(game.neutral).toEqual(false))
				.then(done)
				.catch(done);
		});

		it('can be a post-season game or not', done => {
			Game.create(gameAttrs)
				.then(game => expect(game.postSeason).toEqual(false))
				.then(done)
				.catch(done);
		});

		it('has a time', done => {
			Game.create(gameAttrs)
				.then(game => expect(game.time).toEqual('18:00:00'))
				.then(done)
				.catch(done);
		});
	});

	describe('associations', () => {
		it('belongs to an away team', async done => {
			team = await Team.create(indianaAttrs);
			game = await Game.create({ ...gameAttrs, awayTeamId: team.id });
			game.getAwayTeam().then(({ id }) => expect(id).toEqual(team.id))
				.then(done)
				.catch(done);
		});

		it('belongs to a home team', async done => {
			team = await Team.create(illiniAttrs);
			game = await Game.create({ ...gameAttrs, homeTeamId: team.id });
			game.getHomeTeam().then(({ id }) => expect(id).toEqual(team.id))
				.then(done)
				.catch(done);
		});

		it('belongs to a season', async done => {
			season = await Season.create(seasonAttrs);
			game = await Game.create({ ...gameAttrs, seasonId: season.id });
			game.getSeason().then(({ id }) => expect(id).toEqual(season.id))
				.then(done)
				.catch(done);
		});
	});
});