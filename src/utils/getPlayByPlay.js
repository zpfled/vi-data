var http = require('http');
var request = require('request');

// 'https://www.ncaa.com/schools/illinois/basketball-men'

baseUrl = 'https://data.ncaa.com/jsonp/game/basketball-men/d1'
year = '2018'
month = '01'
day = '27'
awayTeam = 'north-carolina-st'
homeTeam = 'north-carolina'

let urlArray = [baseUrl, year, month, day, awayTeam + '-' + homeTeam, 'pbp.json'];
let url = urlArray.join('/')
console.log('Requesting from ', url)
request(url, { json: true }, (err, response, body) => {
  if (err) { return console.log(err); }
  console.log('body:', body);
  console.log('type:', typeof(body));
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});