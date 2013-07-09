var fs = require('fs');

var data = fs.readFileSync('index.html');
var bf = new Buffer(data);

console.log(bf.toString('utf-8'));
