// http://numbersapi.com/random/year?json

// const fetch = require('node-fetch');

//Jak ustalic co wpisaliśmy
// console.log(process.argv);

// wpisujac komende node app.js jakasWartosc jest to podstawiane pod [2]
// const year = process.argv[2] || Math.floor(Math.random() * 2020);

// fetch('http://numbersapi.com/a2018/year?json')
//     .then(response => response.json())
//     .then(data => console.log(data.text))
//     .catch(error => console.log('error cos nie gra', error) )

// fetch(`http://numbersapi.com/${year}/year?json`)
//     .then(response => {
//         console.log(response.status);
//         console.log(response.ok);
//         return response.json();
//     })
//     .then(data => console.log(data.text))
//     .catch(error => console.log('error cos nie gra', error) );


// drugi przyklad ===============================================================================================

const fetch = require('node-fetch');

// http://numbersapi.com/${number}/${type}?json

// 1773 - liczba dla której brakuje danych

console.log(process.argv);
const arg = process.argv[2];
let type = '';

if (arg.indexOf('--year') === 0) {
    console.log('szukamy roku...');
    type = 'year';
} else if (arg.indexOf('--math') === 0) {
    console.log('szukamy liczby...');
    type = 'math'
} else if (arg.indexOf('--trivia') === 0) {
    console.log('szukamy ciekawostki...');
    type = 'trivia'
}

let indexOfEqual = arg.search('=');
if (indexOfEqual === -1) console.log('nie podałeś liczby');

const number = arg.slice(++indexOfEqual);
if (number === '' || isNaN(Number(number))) {
    console.log('błedna liczba');
    process.exit();
}


fetch(`http://numbersapi.com/${number}/${type}?json`)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Kod błędu: ' + response.status);
        }

    })
    .then(date => console.log(date.text))
    .catch(err => console.log('Błąd: ' + err));