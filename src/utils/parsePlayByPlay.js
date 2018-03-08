let http = require('http');
let request = require('request');
let cheerio = require('cheerio');
let moment = require('moment');
let numeral = require('numeral');
let fs = require('fs');

// look for play-by-play json files in this directory
let dir = './temp'

// read files in 
fs.readdirSync(dir).forEach(file => {
    if (file.slice(0,2) == '20' && file.slice(-5) == '.json') {
        let rawdata = fs.readFileSync(file);
        let playByPlay = JSON.parse(rawdata.slice(16,-2));
        for (var key in playByPlay.periods) {
            console.log(playByPlay.periods[key])
            console.log('\n')
        }
    }
})
