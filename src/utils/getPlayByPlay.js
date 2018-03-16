let http = require('http');
let request = require('request');
let cheerio = require('cheerio');
let moment = require('moment');
let numeral = require('numeral');
let fs = require('fs');

let thisTeamUrlName = 'illinois'
let scheduleUrl = ['https://www.ncaa.com/schools', thisTeamUrlName, 'basketball-men'].join('/')

request(scheduleUrl, function (err, response, html) {
    if (err) { return console.log(err); }
    console.log('Read HTML from ', scheduleUrl); // print the response status code if a response was received

    // load html
    const $ = cheerio.load(html)
    let opponents = []

    // scan all table row elements
    $('tr').each( function(i, element) {
        let dateFromHtml = $(this).children().eq(0).text()
        let opponentUrlFromHtml = $(this).children().eq(1).children().eq(0).attr('href')
        let date = moment(dateFromHtml, 'MM/DD/YY', true)
        if (date.isValid()) {
            // define the url that has the play-by-play json
            year = numeral(date.year()).format('0000')
            month = numeral(date.month()+1).format('00')
            day = numeral(date.date()).format('00')
            opponentUrlName = opponentUrlFromHtml.split('/').pop()
            opponentText = $(this).children().eq(1).text()
            if (opponentText[0] != '@') {
                homeTeam = thisTeamUrlName
                awayTeam = opponentUrlName
            }
            else {
                homeTeam = opponentUrlName
                awayTeam = thisTeamUrlName
            }
            // hack date for unlv night game
            if (opponentUrlName == 'unlv') {
                day = numeral(date.date()+1).format('00')
            }

            let pbpUrlArray = ['https://data.ncaa.com/jsonp/game/basketball-men/d1', year, month, day, awayTeam + '-' + homeTeam, 'pbp.json'];
            let pbpUrl = pbpUrlArray.join('/')

            // if game took place before now, request the play-by-play json from each URL
            if (date.isBefore(moment())) {
                request(pbpUrl, { json: true }, (err, response, body) => {
                    if (err) { return console.log(err); }
                    console.log('Requested play-by-play json from: ', pbpUrl);  
                    console.log('status code: ', response.statusCode, '\n');
                }).pipe(fs.createWriteStream([year, month, day, awayTeam + '-' + homeTeam, 'pbp.json'].join('-')));
            }
        }
    });
});