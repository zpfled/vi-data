const db = require('../db/config');

const Lineup = db.define('lineup', {});

Lineup.sync();