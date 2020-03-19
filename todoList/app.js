const parseArgs = require('minimist');
const colors = require('colors');

const command = parseArgs(process.argv.slice(2,3));
delete command._
console.log(command);

const handleCommand = ({add, remove, list}) => {
    if (add) {
        if (typeof add!== "string") {
            return console.log("Wprowadzana wartosc nie jest textem".red);
        } else if (add.length < 7) {
            return console.log('wprowadz text dluzszy niz 7 znakow'.red);
        }
    } else if (remove) {
        if (typeof remove !== "string" || remove.length < 7 ) {
            return console.log('wpisz nazwe zadania które jest textem i ma minimum 7 znaków');
        }
        console.log('bede cos usuwac');
    } else if (list || list === '') {
        console.log('pokaze liste');
    } else {
        console.log('polecenie nie jest poprawne. Uzyj --add="nazwa zadania", --remove="nazwa zadania", --list');
    }
};

handleCommand(command);