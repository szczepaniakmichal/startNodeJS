// const add = (a, b) => {
//     return a + b;
// };
//
// const division = (a, b) => a / b;
//
// const math = (x, y, callback) => {
//     console.log(callback(x, y))
// };
//
// math(4,1, add);
// math(15, 5, division);

const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (error, file) => console.log(file));
console.log('ten kod wykona sie pierwszy,bo jest fs.readFile jest asynchroniczny');

//dotego kodu musze wrocic gdy moja wiedza wzrosnie
// fs.readFileSync('./text.txt', 'utf8', (error, file) => console.log(file));
// console.log('ten kod wykona sie drugi,bo jest fs.readFileSync jest synchroniczny');