let http = require('http');
let request = require('request');
let cheerio = require('cheerio');
let moment = require('moment');
let numeral = require('numeral');
let fs = require('fs');
let path = require('path');

// look for play-by-play json files in this directory
let dir = '.'
let playIDs = {
                '2PT': 0,
                '3PT': 1,
                'FT': 2,
                'ASSIST': 3,
                'REB-DEF': 4,
                'REB-OFF': 5,
                'TURNOVER': 6,
                'STEAL': 7,
                'BLOCK': 8,
                'FOUL-OFF': 9,
                'FOUL-SHOOT': 10,
                'FOUL-PERSONAL': 11
                }


function parsePlayScore(play) {
    let splitScore = play.score.split('-')
    if (splitScore != '') {
        homeScore = splitScore[0]
        visitorScore = splitScore[1]
    } else {
        homeScore = ''
        visitorScore = ''
    }

    return [homeScore, visitorScore]
}


function parsePlayText() {

    if (string.includes('two point')) {
        
    } else if (string.includes('three point')) {

    } else if (string.includes('three point')) {

    } else if (string.includes('free throw')) {

    } else if (string.includes('assist')) {

    } else if (string.includes('defensive rebound')) {

    } else if (string.includes('offensive rebound')) {

    } else if (string.includes('turnover')) {

    } else if (string.includes('steal')) {

    } else if (string.includes('block')) {

    } else if (string.includes('offensive foul')) {

    } else if (string.includes('shooting foul')) {

    } else if (string.includes('personal foul')) {

    }
    
    return description, player
}

// read files in specified directory (assume it contains only the relevant JSONs)
fs.readdirSync(dir).forEach(file => {
    if (file.slice(0,2) == '20' && file.slice(-5) == '.json') {
        let full_path = path.join(dir, file)
        console.log(full_path)
        let rawdata = fs.readFileSync(full_path);
        let playByPlay = JSON.parse(rawdata.slice(16,-2));
        // for (var key in playByPlay.periods) {
        //     console.log(playByPlay.periods[key].playStats)
        //     console.log('\n')
        for (let i_period in playByPlay.periods) {
            for (let i_play=0; i_play<playByPlay.periods[i_period].playStats.length; i_play++) {
                let play = playByPlay.periods[i_period].playStats[i_play]
                let scoreArray = parsePlayScore(play)
                let db_entry = [parseInt(i_period)+1, play.time, scoreArray[0], scoreArray[0]]
                console.log(db_entry)
            }
        }
    }
})
