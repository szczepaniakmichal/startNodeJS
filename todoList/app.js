const parseArgs = require('minimist');
const colors = require('colors');
const fs = require('fs');

const command = parseArgs(process.argv.slice(2, 3));
delete command._
console.log(command);

const handleCommand = ({add, remove, list}) => {
    if (add) {
        if (typeof add !== "string") {
            return console.log("Wprowadzana wartosc nie jest textem".red);
        } else if (add.length < 7) {
            return console.log('wprowadz text dluzszy niz 7 znakow'.red);
        }
        handleDate(1, add);
    } else if (remove) {
        if (typeof remove !== "string" || remove.length < 7) {
            return console.log('wpisz nazwe zadania które jest textem i ma minimum 7 znaków'.red);
        }
        handleDate(2, remove);
    } else if (list || list === '') {
        handleDate(3, null);
    } else {
        console.log('polecenie nie jest poprawne. Uzyj --add="nazwa zadania", --remove="nazwa zadania", --list'.red);
    }
};

const handleDate = (type, title) => {
    // type - number ( 1 - add; 2 - remove; 3 - list; )
    //title ( string || null )

    const data = fs.readFileSync('datadb.json');
    // const data = fs.readFileSync('data.json', 'utf8');
    // let data = fs.readFileSync('data.json');
    // data = data.toString();
    let tasks = JSON.parse(data);

    if (type === 1 || type === 2) {
        let isExisted = tasks.find(task => task.title === title) ? true : false;
        if (type === 1 && isExisted) {
            return console.log(`Pozycja ${title} już jest na liscie`.red);
        } else if (type === 2 && !isExisted) {
            return console.log(`Pozycja ${title} nie istnieje, wiec nie moge jej usunac`.red)
        }
    }
};

handleCommand(command);