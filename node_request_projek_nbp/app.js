// http://api.nbp.pl/api/exchangerates/rates/a/${code}/

const request = require('request');
const fs = require('fs');

const validCodes = ['eur', 'usd', 'gbp', 'chf'];

const code = process.argv[2];

const isValid = validCodes.find(el => el === code) ? true : false;
if (!isValid) process.exit();

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;
// const url = `http://api.nbp.pl/api/exchangerates/rates/a/faaesf/?format=json`;

request(url, {json: true}, (err, res, body) => {
    if (err) {
        return console.log('Błąd: ' + err);
    }
    if (res.statusCode !== 200) {
        return console.log('Kod błędu: ' + res.statusCode);
    }
    const message = `Średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi: ${(body.rates[0].mid).toFixed(2)} zł`;
    console.log(message);

    fs.appendFile('./bazaDanych.txt', message + '\r\n', function (err) {
        if (err) {
           throw new Error('dane nie zostały zapisane')
        }
        console.log('dane zapisane!');
    })
});


