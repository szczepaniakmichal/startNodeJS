// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

//Jak ustalic co wpisaliśmy
console.log(process.argv);

// wpisujac komende node app.js jakasWartosc jest to podstawiane pod [2]
const year = process.argv[2] || Math.floor(Math.random() * 2020);

// fetch('http://numbersapi.com/a2018/year?json')
//     .then(response => response.json())
//     .then(data => console.log(data.text))
//     .catch(error => console.log('error cos nie gra', error) )

fetch(`http://numbersapi.com/${year}/year?json`)
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    })
    .then(data => console.log(data.text))
    .catch(error => console.log('error cos nie gra', error) );