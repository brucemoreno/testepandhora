const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream("prices.csv)")
    .pipe(csv())
    .on('prices', (Price) => results.push(data))
    .on('end', () => console.log(results));
