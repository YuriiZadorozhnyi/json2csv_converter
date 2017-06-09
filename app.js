var json2csv = require('json2csv');
var fs = require('fs');
var http = require('http');
var request = require('request');


request
  .get('https://poloniex.com/chartData/USDT_BTC-300.json')
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('poloniex.json'));


// var myCars = fs.readFileSync('poloniex.json');
// var fields = ["date", "high", "low", "open", "close", "volume", "quoteVolume", "weightedAverage"];
// json2csv -i poloniex.json -f date,high,low,open,close,volume,quoteVolume,weightedAverage -o poloniex.csv

// var csv = json2csv({ data: myCars });
 
// fs.writeFileSync('poloniex.csv', csv, function(err) {
//   if (err) throw err;
//   console.log('file saved');
// });