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


function parsePlayText(play) {

    let text;
    if (play.homeText) {
        text = play.homeText
    } else if (play.visitorText) {
        text = play.visitorText
    }


    let parsedPlay = new Object();
    if (text.includes('two point')) {
        parsedPlay.description = 'two point'
        
    } else if (text.includes('three point')) {
        parsedPlay.description = 'three point'

    } else if (text.includes('free throw')) {
        parsedPlay.description = 'free throw'

    } else if (text.includes('assist')) {
        parsedPlay.description = 'assist'

    } else if (text.includes('defensive rebound')) {
        parsedPlay.description = 'defensive rebound'

    } else if (text.includes('offensive rebound')) {
        parsedPlay.description = 'offensive rebound'

    } else if (text.includes('turnover')) {
        parsedPlay.description = 'turnover'

    } else if (text.includes('steal')) {
        parsedPlay.description = 'steal'

    } else if (text.includes('block')) {
        parsedPlay.description = 'block'

    } else if (text.includes('offensive foul')) {
        parsedPlay.description = 'offensive foul'

    } else if (text.includes('shooting foul')) {
        parsedPlay.description = 'shooting foul'

    } else if (text.includes('personal foul')) {
        parsedPlay.description = 'personal foul'

    }
    
    return parsedPlay
}

// read files in specified directory (assume it contains only the relevant JSONs)
fs.readdirSync(dir).forEach(file => {
    if (file.slice(0,2) == '20' && file.slice(-5) == '.json') {
        let full_path = path.join(dir, file)
        console.log(full_path)
        let rawdata = fs.readFileSync(full_path);
        let playByPlay = JSON.parse(rawdata.slice(16,-2));
        for (let i_period in playByPlay.periods) {
            for (let i_play=0; i_play<playByPlay.periods[i_period].playStats.length; i_play++) {
                let play = playByPlay.periods[i_period].playStats[i_play]
                let scoreArray = parsePlayScore(play)
                let parsedPlay = parsePlayText(play)
                let db_entry = [parseInt(i_period)+1, play.time, scoreArray[0], scoreArray[0], parsedPlay.description]
                console.log(db_entry)
            }
        }
    }
})
