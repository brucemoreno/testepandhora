var fs = require("fs");
var parse = require("csv-parse");

var csvfile = "prices.csv";
const results = [];

class User {
    constructor(Date, Price) {
        this.Date = day;
        this.Price = price;
    }
}

const processData = (err, data) => {
    if (err) {
        console.log("An error was encountered: ${err}");
        return;
    }

    data.shift();
    const userList = data.map(row => new User(...row));

    analyseUser(userlist);

}

fs.createReadStream(csvfile)
    .pipe(parse({ delimiter: ',' }, processData));



fs.createReadStream(csvfile)
    pipe(csv())
    .on('day', (day) => results.push(data))
    .on('end', () => console.log(results));