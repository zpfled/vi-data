let http = require('http');
let request = require('request');
let cheerio = require('cheerio');
let moment = require('moment');
let numeral = require('numeral');
let fs = require('fs');
let path = require('path');

// look for play-by-play json files in this directory
let dir = '.'
// let playIDs = {
//                 '2PT': 0,
//                 '3PT': 1,
//                 'FT': 2,
//                 'ASSIST': 3,
//                 'REB-DEF': 4,
//                 'REB-OFF': 5,
//                 'TURNOVER': 6,
//                 'STEAL': 7,
//                 'BLOCK': 8,
//                 'FOUL-OFF': 9,
//                 'FOUL-SHOOT': 10,
//                 'FOUL-PERSONAL': 11
//                 }

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

function parsePlayer(text, playDescriptionString) {
    let delimiter = ''
    // identify blocker
    if (playDescriptionString.includes('block')) {
        delimiter = ' blocks '
    }
    // identify shooter
    else if (playDescriptionString.includes('point') || playDescriptionString.includes('free throw')) {
        if (text.includes(' makes ')) {
            delimiter = ' makes '
        } else if (text.includes(' misses ')) {
            delimiter = ' misses '
        }
    }
    // identify rebounder
    else if (playDescriptionString.includes('rebound')) {
        if (text.includes(' defensive ')) {
            delimiter = ' defensive '
        } else if (text.includes(' offensive ')) {
            delimiter = ' offensive '
        }
    }
    // identify player who turned it over
    else if (playDescriptionString.includes('turnover')) {
        delimiter = ' turnover '
    }
    // identify fouler
    else if (playDescriptionString.includes('foul')) {
        if (text.includes(' offensive foul')) {
            delimiter = ' offensive foul'
        } else if (text.includes(' shooting foul')) {
            delimiter = ' shooting foul'
        } else if (text.includes(' personal foul')) {
            delimiter = ' personal foul'
        }
    }


    // parse player name, if delimiter was defined
    let playerName = ''
    if (delimiter) {
        playerName = text.split(delimiter)[0]
    }

    return playerName
}


function parsePlayText(play) {

    // get play description text 
    let text;
    if (play.homeText) {
        text = play.homeText
    } else if (play.visitorText) {
        text = play.visitorText
    }
    console.log(text)

    // define object to store play description and corresponding player
    let parsedPlay = new Object();
    // order matters, check for block before shot
    if (text.includes('blocks')) {
        parsedPlay.description = 'block'
    } else if (text.includes('two point')) {
        parsedPlay.description = 'two point'
    } else if (text.includes('three point')) {
        parsedPlay.description = 'three point'
    } else if (text.includes('free throw')) {
        parsedPlay.description = 'free throw'
    } else if (text.includes('defensive rebound')) {
        parsedPlay.description = 'defensive rebound'
    } else if (text.includes('offensive rebound')) {
        parsedPlay.description = 'offensive rebound'
    } else if (text.includes('turnover')) {
        parsedPlay.description = 'turnover'
    } else if (text.includes('offensive foul')) {
        parsedPlay.description = 'offensive foul'
    } else if (text.includes('shooting foul')) {
        parsedPlay.description = 'shooting foul'
    } else if (text.includes('personal foul')) {
        parsedPlay.description = 'personal foul'
    }

    // identify player associated with this play
    if ('description' in parsedPlay) {
        parsedPlay.player = parsePlayer(text, parsedPlay.description)
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
                let db_entry = [parseInt(i_period)+1, play.time, parsedPlay.player, parsedPlay.description, scoreArray[0], scoreArray[1]]
                console.log(db_entry)
                // // if a turnover, check if the ball was stolen
                // if (parsedPlay.description.includes('turnover')) {

                // }
                // // if a shot, check if it was assisted
                // if (parsedPlay.description.includes('point')) {

                // } 
                console.log('\n')
            }
        }
    }
})
