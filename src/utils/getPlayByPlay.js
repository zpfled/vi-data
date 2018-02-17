let http = require('http');
let request = require('request');
let cheerio = require('cheerio');
let moment = require('moment');
let numeral = require('numeral');

let homeTeam = 'illinois'
let scheduleUrl = ['https://www.ncaa.com/schools', homeTeam, 'basketball-men'].join('/')

request(scheduleUrl, function (err, response, html) {
    if (err) { return console.log(err); }
    // console.log('body:', html);
    // console.log('type:', typeof(html));
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    // load html
    const $ = cheerio.load(html)
    let opponents = []

    // scan all table row elements
    $('tr').each( function(i, element) {
        // if this row has first td tag matching a date
        let dateFromHtml = $(this).children().eq(0).text()
        let schoolUrlFromHtml = $(this).children().eq(1).children().eq(0).attr('href')
        let date = moment(dateFromHtml, 'MM/DD/YY', true)
        if (date.isValid()) {
            // console.log('i:', i);
            // console.log('dateFromHtml :', dateFromHtml);
            // console.log('schoolUrlFromHtml :', schoolUrlFromHtml);
            // console.log('date :', date);
            // console.log('year :', date.year());
            // console.log('month :', date.month()+1);
            // console.log('day :', date.date());

            baseUrl = 'https://data.ncaa.com/jsonp/game/basketball-men/d1'
            year = numeral(date.year()).format('0000')
            month = numeral(date.month()+1).format('00')
            day = numeral(date.date()).format('00')
            opponent = schoolUrlFromHtml.split('/').pop()

            awayTeam = opponent // will fix this
            let urlArray = [baseUrl, year, month, day, awayTeam + '-' + homeTeam, 'pbp.json'];
            let url = urlArray.join('/')

            // if game took place before now, request the play-by-play json from each URL
            if (date.isBefore(moment())) {
                request(url, { json: true }, (err, response, body) => {
                if (err) { return console.log(err); }
                    // console.log('body:', body);
                    // console.log('type:', typeof(body));
                    console.log('Requesting play-by-play json from: ', url)
                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                });
            }
        }
    });
});